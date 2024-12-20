---
layout: single
title: "[컴플리트 일본어] 웹 게임 동작의 원리"
excerpt: "개발초안을 작성한다!"

categories:
  - dev
tags:
  - [jp, NLP, WebApp]

header:
    overlay_image: "/assets/images/japanese.png"
    overlay_filter: 0.3 # same as adding an opacity of 0.5 to a black background
    caption: "Reference: [**源氏物語**](http://james.3zoku.com/genji/genji01.html)"
    teaser: "/assets/images/japanese.png"

toc: true
toc_sticky: true
 
date: 2023-10-03
last_modified_at: 2023-10-03
---

# 1. 개요
일본어 학습에 편의를 제공하기 위한 여러 기능들을 고루 갖춘 웹 애플리케이션을 배포하려고 계획하고 있다.

Kanji de GO! 라는 일본 한자 독음 맞추기 게임에서 착안하여, 실제 글의 문단이나 회화가 주어졌을 때 적절한 독음을 이용자가 입력하여 약점을 분석해주는 식이다.

그렇게 일본어 한자의 다양한 독음에 익숙해지면 아직 익숙하지 않은 용법들에 대해서 용례를 보여주고, 직접 작문까지 시켜보면 더욱 완성도 높은 프로그램일 것이다! 앞으로 이 어플리케이션을 개발하며 개발일기를 써보려고 한다.
# 2. 기능

여러 기능들이 포함될 예정이다.
# 3. 론칭 예정 날짜

2024.03.01에 웹 앱을 론칭하려고 계획하고 있다.

# 4. 개발 환경 관련

개발 환경은 React나 Vue.js를 쓰려고 한다.

## 실례 1. Kanji de GO!
내가 본 프로그램을 개발하게 된 큰 계기가 되는 게임이다.
찾아보니 RPG Maker (소위 알만툴)로 만들었다고 한다.
??? 그게 말이 되나?
조금 더 조사해보자...
## 실례 2. 작혼
내가 본 완성도 높은 웹 브라우저에서 돌아가는 게임 중 하나는 작혼이다.
작혼은 어떤 프로그램으로 개발되었을까?

## 일본어 예문
> 葵の上の容態が悪化の一途をたどる中、光源氏は見舞いを重ねるも、心はすでに六条御息所へと傾いていた。二人の女性の間で揺れ動く源氏の苦悩は、嫉妬に狂う御息所の生霊が葵の上を苦しめるという怪異へと発展する。御息所の怨念は深く、ついには葵の上は皇子を出産後、息絶えてしまうのだった。