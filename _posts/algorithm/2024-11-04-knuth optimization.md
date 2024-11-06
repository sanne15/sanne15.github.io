---
layout: single     
title:  "[DP] Knuth's Optimization"
excerpt: "Knuth 최적화에 대해 알아보자"

categories:
  - algorithm
tags:
  - [DP, optimization]

toc: true
toc_sticky: true

header:
    overlay_image: "/assets/images/splash_images/knuth.png"
    overlay_filter: 0.3 # same as adding an opacity of 0.5 to a black background
    caption: "Reference: [***Google Scholar***](https://scholar.google.com/citations?hl=en&user=t0yrrzQAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=matthewkim1034%40gmail.com&gmla=AL3_zihXeLI75puPmDPM-d_mZ5E-OC33RChJBJbXPtXYd5m-vhIpAwJzsN6e42i2vyPDpBiEE4EwFYzC45P2n6hfULkBs6LezrHjzb2NNQkWWS_63P5gcRjCY8pPOXOSVDbRsl42IQhRVOUezAEZHVxp-y2t32DGvszXFq24fkM7PFz3S-S0QypmnfNJSL4l4YJ_WL9vztJd1T6P7qdPzSMSOQ8BWhEo2jdh-K0Lf8RCX2JFXyTFww)"
    teaser: "/assets/images/splash_images/knuth.png"
 
date: 2024-11-03
last_modified_at: 2024-11-06
---

# Knuth's Optimization
## in Dynamic Programming

아래 조건을 만족하는 상황에서 이 테크닉을 사용할 수 있다.
***
### 1. 점화식
$$ DP[i][j]=min_{i≤k<j}​(DP[i][k]+DP[k][j])+C[i][j] $$

### 2. C의 조건
- Quadrangle inequality : $$ C[a][c] + C[b][d] ≤ C[a][d] + C[b][c] (a ≤ b ≤ c ≤ d) $$
- Monotonicity : $$ C[b][c] ≤ C[a][d] (a ≤ b ≤ c ≤ d) $$

- 더불어 점화식의 k는 C와 무관함. (independent)

### 3. Consequence

위 조건 4가지를 만족하면 다음 식이 성립한다. 

- `A[i][j]` = `DP[i][j]가 최소가 되기 위한 가장 작은 k`
- $A[i][j-1] ≤ A[i][j] ≤ A[i+1][j]$ 

([증명](https://dl.acm.org/doi/10.1145/800141.804691)이 길어서 필자는 이해하지 못했다...)

이 새로운 조건을 활용하면 $O(n^3)$ 알고리즘을 $O(n^2)$ 시간 안에 풀 수 있게 최적화된다.

### 예제 문제
[파일합치기 2, boj 13974](https://www.acmicpc.net/problem/13974)

#### 풀이코드 (c++17)

<details>
  <summary>열기/접기</summary>
  <div markdown="1">
  - boj 13794에서 $C[a][b]$는 a부터 b번째 파일까지의 용량 합이므로 위 조건을 만족.
  
```cpp

#include <bits/stdc++.h>
#define fastio cin.tie(0)->sync_with_stdio(0)
const int INF = 0x7f7f7f7f;  

using namespace std;  

int arr[5010];
int sum[5010]; // arr는 저장용 sum은 C 계산용
int dp[5010][5010]; // (5000, vector<int>(5000))
int idx[5010][5010]; // 점화식의 k 저장
  

// D[i][j] = i+1번째부터 j번째까지의 누적합 최솟값
// 점화식 : dp[i][j] = min(dp[i][k] + dp[k][j]) + C[i][j], C가 i부터 j까지 1개씩 누적합
// 그러므로 D[i][j] = min(D[i][k] + D[k][j]) + C[i+1][j]
// C가 사각 부등식과 단조성을 만족하는 monge array이므로 크누스 최적화를 쓸 수 있다.


int main() {
    fastio;
    int t, k;  

    cin >> t;  

    while(t--) {
        cin >> k; 

        for (int i = 1; i <= k; i++){
            cin >> arr[i];
            sum[i] = sum[i-1] + arr[i]; // index : 1 ~ k
        }        

        for (int i = 1; i <= k; i++){
            dp[i-1][i] = 0;
            idx[i-1][i] = i;
        }        

  

        for (int i = 2; i <= k; i++) { // dp index 상의 거리 (실제 카드로는 1 차이부터 시작)
            for (int j = 0; j + i <= k; j++) { // j가 1번 인덱스
                dp[j][j+i] = INF;
                for (int x = idx[j][j+i-1]; x <= idx[j+1][j+i]; x++) { // knuth opt.
                    int tmp = dp[j][x] + dp[x][j+i] + sum[j+i]-sum[j];
                    if (dp[j][j+i] > tmp) {
                        dp[j][j+i] = tmp;
                        idx[j][j+i] = x;
                    }                        
                }
            }
        }            
        cout << dp[0][k] << endl;
    }
}
```
  </div>
</details>

### 참고문헌
- [블로그1](https://justicehui.github.io/hard-algorithm/2019/01/02/knuthOpt/)
- [블로그2, 오류 있음](https://suri78.tistory.com/16)
- [Algorithms for Competitive Programming](https://cp-algorithms.com/dynamic_programming/knuth-optimization.html)
- [Efficient DP Using Quadrangle Inequalities, F. Frances Yao](https://dl.acm.org/doi/pdf/10.1145/800141.804691)


