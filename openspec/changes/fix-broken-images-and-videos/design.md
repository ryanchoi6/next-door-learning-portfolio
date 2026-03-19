## Context

Lovable로 생성된 K-12 교사 포트폴리오 사이트. 이미지 127개가 `public/`에 저장되어 있고, `src/data/projects.ts`에서 경로 문자열로 참조한다. 배포 사이트에서 92개 파일(파일명에 공백 포함)이 404를 반환하며, 35개(공백 없음)만 정상 로드된다.

Home 페이지에 Vimeo 프로필 영상이 배포 사이트에 존재하나 로컬 `Index.tsx` 코드에는 반영되지 않았다. `projects.ts`에 YouTube placeholder URL 2개가 남아있다.

## Goals / Non-Goals

**Goals:**
- 배포 사이트에서 모든 이미지가 정상 로드되도록 파일명 정규화
- `projects.ts`의 모든 경로가 실제 파일과 1:1 매칭
- Home 페이지 Vimeo 영상 코드 동기화
- 손상/오타/placeholder 데이터 정리

**Non-Goals:**
- 이미지 압축/최적화 (별도 change로 분리)
- lazy loading 구현
- 새로운 콘텐츠 추가
- About 페이지 영상 추가 (현재 About에는 영상 없음 — 수박쥬스님이 언급한 "애니메이션 영상"은 Home 페이지의 Vimeo 프로필 영상으로 확인)

## Decisions

### 1. 파일명 공백 치환: 공백 → 하이픈

**결정**: 공백을 하이픈(`-`)으로 치환한다.

**대안 검토**:
- 언더스코어(`_`): 기존 파일명에 이미 언더스코어가 구분자로 쓰이고 있어 (`Student_Work_Sample_5.JPG`) 가독성 혼동
- URL 인코딩(`%20`) 유지: Lovable 호스팅에서 %20을 처리 못하는 것이 근본 원인이므로 불가
- 하이픈(`-`): 기존 구분자와 충돌 없고, URL-safe, 가독성 좋음

**예시**: `ES_Building Bridge_Student Work Sample_2.JPG` → `ES_Building-Bridge_Student-Work-Sample_2.JPG`

### 2. 리네임 방식: 쉘 스크립트 일괄 처리

**결정**: bash 스크립트로 `public/` 내 공백 포함 파일을 일괄 리네임 후, `projects.ts`의 경로 문자열을 동일 패턴으로 일괄 치환한다.

**대안 검토**:
- 수동 하나씩 변경: 92개 파일 — 오류 확률 높고 비효율적
- Node.js 스크립트: 가능하나 이 작업에 과도함

**접근**:
```
1. public/ 내 공백 포함 파일 리네임: for f in *; do mv "$f" "${f// /-}"; done
2. projects.ts 내 경로 문자열에서 공백→하이픈 치환
3. 빌드 후 404 제로 검증
```

### 3. 손상 파일 처리: 참조 제거

**결정**: `HS Art & Media_Student_Work_Sample_8.jpg` (2바이트, 손상)은 `projects.ts`에서 참조를 제거한다. 원본 파일을 구할 수 없으므로 복구보다 제거가 안전하다.

### 4. Home 페이지 Vimeo 임베드: Hero 섹션 우측에 배치

**결정**: 배포 사이트의 현재 레이아웃을 재현한다. Hero 섹션의 텍스트 옆 우측 영역에 Vimeo iframe을 배치한다.

**구현**:
- `Index.tsx`의 Hero section에 `<iframe>` 추가
- URL: `https://player.vimeo.com/video/1174755421?autoplay=1&muted=1&controls=0&loop=1&title=0&byline=0&portrait=0`
- 반응형: 모바일에서는 텍스트 아래에 배치 (기존 2-column grid 패턴 활용)

### 5. YouTube placeholder URL: 제거

**결정**: `dQw4w9WgXcQ` (릭롤) URL 2개를 `videoUrls` 배열에서 제거한다. 실제 영상 URL은 수박쥬스님이 추후 제공하면 추가한다.

### 6. `&` 문자 처리: 파일명에서 유지

**결정**: `HS Art & Media`, `MS Art & Media` 등의 `&` 문자는 그대로 유지한다. URL에서 `&`는 `%26`으로 인코딩되며 이는 대부분의 호스팅에서 정상 처리된다. 공백만 문제이므로 공백만 치환한다.

## Risks / Trade-offs

**[Git diff 크기]** → 92개 파일 리네임 + projects.ts 대량 수정으로 큰 diff 발생. 한 번의 커밋으로 atomic하게 처리하여 중간 상태 방지.

**[& 문자 호환성]** → `&`가 일부 호스팅에서 문제될 수 있음. 현재 Lovable에서는 공백만 문제이고 `&`는 이미 다른 파일에서 정상 동작 확인됨. 문제 발생 시 `&`→`and`로 추가 치환하는 후속 change로 대응.

**[Vimeo 영상 가용성]** → Vimeo 무료 계정 제한(1GB)으로 영상이 삭제될 수 있음. iframe 로드 실패 시에도 레이아웃이 깨지지 않도록 fallback 스타일링 적용.

**[로컬-배포 코드 불일치]** → Lovable 에디터에서 직접 수정한 내용이 로컬 코드에 없을 수 있음. 이번 change에서 Home Vimeo만 동기화하고, 추가 불일치는 발견 시 별도 처리.
