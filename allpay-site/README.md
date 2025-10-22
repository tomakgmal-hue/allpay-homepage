# AllPay 회사 홈페이지

PPT 색감과 톤을 반영한 기업형 홈페이지 (Next.js 14 + Tailwind + Framer Motion).  
상단 로고는 제공해주신 PNG를 사용합니다.

## 사용 방법
```bash
npm i
npm run dev
```
- 개발 서버: http://localhost:3000

## 배포 (Vercel 권장)
1. 이 폴더를 깃 저장소로 올립니다.
2. Vercel에서 **New Project** → 저장소 연결 → Build Command/Output 기본값으로 배포합니다.

## 커스터마이즈 포인트
- 색상: `tailwind.config.js` 의 `allpay.*` 및 `app/globals.css` 그라데이션
- 섹션 문구: `app/page.tsx`
- 로고 변경: `public/logo.png` (현재 logo.png)
