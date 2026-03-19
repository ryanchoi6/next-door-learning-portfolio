## 1. 파일명 정규화 (public/)

- [x] 1.1 `public/` 내 파일명에 공백이 포함된 92개 파일을 공백→하이픈으로 일괄 리네임 (`&` 문자는 유지)
- [x] 1.2 리네임 후 공백 포함 파일이 0개인지 확인 (`ls public/ | grep ' ' | wc -l` → 0)

## 2. 손상 파일 처리

- [x] 2.1 `public/HS-Art-&-Media_Student_Work_Sample_8.jpg` (리네임 후 이름)이 2바이트 손상 파일인지 확인하고 삭제

## 3. projects.ts 경로 업데이트

- [x] 3.1 `src/data/projects.ts` 내 모든 이미지 경로의 공백을 하이픈으로 일괄 치환
- [x] 3.2 접두사 중복 오타 수정: `HS Art & Media_HS Art & Media_Student_Work_Sample_8.jpg` → 단일 접두사로 수정 (또는 손상 파일이므로 참조 제거)
- [x] 3.3 손상 파일 참조를 `projects.ts`의 해당 프로젝트 `images` 배열에서 제거
- [x] 3.4 YouTube placeholder URL (`dQw4w9WgXcQ`) 2개를 `videoUrls` 배열에서 제거
- [x] 3.5 `projects.ts`의 모든 경로가 `public/` 내 실제 파일과 1:1 매칭하는지 스크립트로 검증

## 4. Home 페이지 Vimeo 영상 임베드

- [x] 4.1 `src/pages/Index.tsx` Hero 섹션에 Vimeo iframe 추가 (`https://player.vimeo.com/video/1174755421?autoplay=1&muted=1&controls=0&loop=1&title=0&byline=0&portrait=0`)
- [x] 4.2 반응형 레이아웃 적용: 데스크톱 2-column (텍스트 좌 / 영상 우), 모바일 1-column (텍스트 위 / 영상 아래)
- [x] 4.3 Vimeo 로드 실패 시에도 레이아웃이 깨지지 않는지 확인

## 5. 검증

- [x] 5.1 `npm run build` 성공 확인
- [x] 5.2 로컬 `npm run preview`에서 전체 이미지 로드 확인 (404 에러 0건)
- [x] 5.3 Projects 페이지에서 각 카테고리 필터 클릭 시 썸네일 정상 표시 확인
- [x] 5.4 Home 페이지 Vimeo 영상 재생 확인
