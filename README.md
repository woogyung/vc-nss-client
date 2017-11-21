![Vanilla Coding](https://s3.ap-northeast-2.amazonaws.com/vanilla-coding/Assets/logo_regular%403x.png)

## News Search System - `v2-api` Branch

### TODO

**1. 뉴스 섹션 완성하기**
- 현재 우리는 `config/data.json`으로부터 데이터를 읽어옵니다만, 이제 NY Times API로부터 데이터를 가져와 보여줄겁니다.
- 사용자에게 섹션을 선택할 수 있도록 UI를 만들어 주세요. (선택 가능한 섹션의 종류는 아래 NY Times API 문서를 보세요.)
- [NY Times API](https://developer.nytimes.com/) 문서(`top_stories` 부분)을 참고하시면 검색 가능한 섹션들이 어떤 것들이 있는지 알 수 있고, 어떻게 Ajax request를 해야하는지도 나와있습니다.
- `json` 형태로 사용하는 방법을 찾으셔서, 사용자가 메인 페이지에서 섹션을 선택하면 선택된 섹션에 대한 뉴스를 NY Times API로부터 가져와서 보여주는 기능을 완료해주세요.
- Ajax는 [`axios`](https://github.com/axios/axios)라는 라이브러리가 설치되어있으니 사용하시면 됩니다. `App` 컴포넌트에 보시면 추가되어 있습니다.

**2. 로딩 아이콘 넣기**
- 섹션을 클릭했을때, 새로운 데이터를 가져오는 동안 사용자에게 loading indicator를 보여주세요.

### 설치하기

**포크하지 마시고 바로 클론하신후, 본인만의 브랜치를 만들어 작업하시고 해당 브랜치로 PR하세요.**

```
git clone https://github.com/vanilla-coding/nss-client.git
cd nss-client
npm install
```

### 실행하기

```
npm start
```
