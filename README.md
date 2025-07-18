# Figma Design Tokens

이 프로젝트는 [Design Tokens Plugin](https://github.com/lukasoppermann/design-tokens.git)을 fork([c8c1337](https://github.com/lukasoppermann/design-tokens/commit/c8c1337e4cd0b3a3a7097e7aa2579c88514d4250))한 프로젝트입니다.  
Design Tokens Plugin에서 처리되지 않는 것들에 대해서 수정되었습니다.  

## 사용방법
빌드(pnpm build)를 통해 ([/dist](/dist))을 생성한 후 피그마에서 import하여 사용합니다.

### import 방법
Plugins -> Development -> import plugin from manifest... 메뉴를 통해 이 프로젝트의 [manifest.json](/manifest.json)을 선택하여 임포트 합니다.  
