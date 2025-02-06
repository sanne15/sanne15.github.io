---
layout: single
title: "[jekyll] 문제해결록"
excerpt: "Jekyll을 활용한 Github Blog 개설의 시행착오를 모아보았다."

categories:
  - dev
tags:
  - [Github, blog, pages]

header:
    overlay_image: "/assets/images/splash_images/jekyll.png"
    overlay_filter: 0.3 # same as adding an opacity of 0.5 to a black background
    caption: "Reference: [***Jekyll Official Homepage***](https://jekyllrb.com/)"
    teaser: "/assets/images/splash_images/jekyll.png"

toc: true
toc_sticky: true
 
date: 2024-10-28
last_modified_at: 2024-11-06
---

# 개요
내가 본 블로그의 개발을 시작하면서 겪은 난관과, 정말로 큰 도움이 된 블로그들을 회고하면 나 또한 블로그 후배들을 위해서
무언가 '안배'를 마련해놓지 않으면 안될 것 같다는 생각에, 본 페이지를 작성하게 되었다.

# 초심자를 위한 Tip
* 아래 명령어를 통해 로컬에서 실행하고 점검한 후에, push하자.  
  Deploy까지 시간이 오래걸려서 잦은 수정이 필요한 블로그 작업에는 부적합하다.  
    
  ```ruby
  bundle exec jekyll serve
  ```
* 마크다운 문법을 잘 정리한 블로그를 보면서 학(學)을,  
  직접 블로그에 적용시켜보면서 습(習)을 해야한다.  
  Learning By Doing!!

# FAQ
> 다양한 블로그의 글을 참고하면서 글을 쓰고 있는 중입니다. 
>
> 출처 표기가 제대로 되지 않았다면 미리 사죄드립니다.

* <a href="https://sun0te.github.io/blog/blog_custom/" target="_blank">index.html 그리드 수정</a>
* <a href="https://ansohxxn.github.io/blog/category/" target="_blank">sidebar 게시글 개수 추가하기</a>
* 새 탭에서 열기
  * [새 탭에서 열기 자동화](https://mrinalcs.github.io/open-external-links-in-new-tab-in-jekyll){:target="_blank"}
  * 해결책 : 그냥 `[텍스트](하이퍼링크)` 뒤에 `{:target="_blank"}` 붙이면 된다.
* 태그/카테고리/업데이트 뒤에 글 내용이 너무 빠르게 와요...
  * 해결책 : `_include/page__date.html` 마지막에 `<br>`하나만 넣어주면 됩니다.
* 카테고리를 만들었는데 글이 안보여요...
  * 해결책 : _data 폴더 안에 navigation.yml의 document links를 수정해주자.



## 계속해서 참고할만한 블로그
블로그에 액세스할 수 없는 경우, 댓글로 알려주시기 바랍니다.
{: .notice--warning}

* [@eona1301님의 블로그](https://velog.io/@eona1301/Github-Blog-Jekyll-minimal-mistakes){:target="_blank"}