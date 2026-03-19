## Why

48개의 이미지가 배포된 사이트에서 404 에러를 반환한다. 파일명에 공백이 포함된 이미지는 Lovable 호스팅에서 전부 로드 실패하고, 공백이 없는 파일만 정상 로드된다. 또한 Home 페이지의 Vimeo 영상 임베드 코드가 로컬 코드에 동기화되지 않았고, projects.ts 내 YouTube URL 2개가 placeholder(릭롤)로 남아있다.

## What Changes

- **파일명 정규화**: `public/` 내 공백 포함 파일 76개를 공백→하이픈으로 일괄 리네임
- **데이터 경로 업데이트**: `src/data/projects.ts`의 모든 이미지/영상 경로를 리네임된 파일명과 일치하도록 업데이트
- **손상 파일 처리**: `HS Art & Media_Student_Work_Sample_8.jpg` (2바이트, 손상) 참조 제거 또는 원본으로 교체
- **경로 오타 수정**: `HS Art & Media_HS Art & Media_Student_Work_Sample_8.jpg` 접두사 중복 오타 수정
- **Home 페이지 영상 동기화**: 배포 사이트에 존재하는 Vimeo 임베드(`video/1174755421`)를 `Index.tsx` 코드에 추가
- **Placeholder 영상 URL 정리**: projects.ts 내 YouTube placeholder URL(`dQw4w9WgXcQ`) 2개를 제거하거나 실제 URL로 교체

## Capabilities

### New Capabilities

- `image-asset-management`: 이미지 파일 네이밍 규칙, 경로 참조 패턴, 파일 무결성 요구사항을 정의
- `video-embed`: Home/About 페이지의 Vimeo/YouTube 영상 임베드 요구사항 및 projects.ts 내 영상 URL 관리 규칙을 정의

### Modified Capabilities

_(기존 spec 없음)_

## Impact

- **파일 시스템**: `public/` 내 76개 파일 리네임 (공백→하이픈)
- **데이터 레이어**: `src/data/projects.ts` — 100+ 이미지 경로 및 영상 URL 일괄 수정
- **페이지**: `src/pages/Index.tsx` — Vimeo iframe 임베드 코드 추가
- **빌드**: 파일명 변경으로 인한 기존 Vite 빌드 캐시 무효화 (재빌드 필요)
- **배포**: Lovable 재배포 후 전체 이미지 로드 검증 필요
