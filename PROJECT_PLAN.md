# 🎓 Climax 강의 판매 사이트 구축 플랜

> **프로젝트명**: Climax Learning Platform  
> **목표**: DRM이 적용된 자체 강의 판매 플랫폼 구축  
> **개발 방식**: AI 기반 웹 서비스 개발 (바이브 코딩)  
> **DRM 솔루션**: Vimeo OTT  
> **작성일**: 2026년 1월 3일  
> **문서 버전**: 2.0.0

---

## 💡 개념 이해: 학원 설립 비유

강의 사이트를 만드는 과정은 **종합 학원을 설립하는 것**과 같습니다:

| 학원 설립 | 웹 개발 |
|----------|---------|
| 🏗️ 건물 짓고 인테리어 | 프로젝트 설정 + 랜딩 페이지 |
| 🪧 학원 간판 달기 | 도메인 연결 |
| 📋 학생 명부 + 출결 시스템 | DB + 로그인 구현 |
| 📚 교재/영상 창고 보관 | 외부 저장소 (Vimeo, R2) |
| 💳 수강료 결제 시스템 | 토스페이먼츠 연동 |
| 🖥️ 원장님 사무실 | 관리자 페이지 |

---

## 📋 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [기술 스택](#2-기술-스택)
3. [6단계 개발 프로세스](#3-6단계-개발-프로세스)
4. [핵심 기능 명세](#4-핵심-기능-명세)
5. [데이터베이스 설계](#5-데이터베이스-설계)
6. [보안 및 법적 준수](#6-보안-및-법적-준수)
7. [예상 비용](#7-예상-비용)
8. [체크리스트](#8-체크리스트)
9. [참고 자료](#9-참고-자료)

---

## 1. 프로젝트 개요

### 1.1 비전
- 고품질 강의 콘텐츠를 안전하게 제공하는 자체 플랫폼
- 불법 복제 방지를 위한 Vimeo DRM 적용
- 사용자 친화적인 학습 경험 제공
- AI 기반 개발로 효율적인 구축

### 1.2 주요 목표
- [ ] 안정적인 동영상 스트리밍 서비스
- [ ] 완벽한 콘텐츠 보호 (DRM)
- [ ] 원활한 결제 시스템
- [ ] 학습 진도 관리
- [ ] 관리자 대시보드
- [ ] 개인정보 보호 및 법적 준수

### 1.3 타겟 사용자
- **학습자**: 강의를 구매하고 학습하는 사용자
- **관리자**: 강의 등록, 사용자 관리, 매출 관리

---

## 2. 기술 스택

### 2.1 Core Stack

| 영역 | 기술 | 용도 |
|------|------|------|
| **Framework** | Next.js 14 (App Router) | 풀스택 프레임워크 |
| **Language** | TypeScript | 타입 안정성 |
| **Styling** | Tailwind CSS + shadcn/ui | UI 구현 |
| **Database** | Supabase (PostgreSQL) | DB + 인증 + 스토리지 |
| **Auth** | Supabase Auth | 소셜 로그인 |
| **Video** | Vimeo Premium | DRM + 스트리밍 |
| **Storage** | Cloudflare R2 | 강의 자료 저장 |
| **Payment** | 토스페이먼츠 | 결제 처리 |
| **Hosting** | Vercel | 배포 |
| **DNS** | Cloudflare | DNS + CDN |

### 2.2 개발 도구

| 도구 | 용도 |
|------|------|
| **Cursor / Claude** | AI 기반 코딩 (바이브 코딩) |
| **Git + GitHub** | 버전 관리 |
| **VS Code** | 코드 에디터 |
| **Supabase MCP** | AI SQL 검증 |

---

## 3. 6단계 개발 프로세스

### 📊 전체 일정 (12주)

```
Step 1: 프로젝트 초기 설정 + 랜딩 페이지 ████░░░░░░░░░░░░░░░░ Week 1-2
Step 2: 도메인 연결 + 배포              ░░░░██░░░░░░░░░░░░░░ Week 3
Step 3: DB + 회원가입 구현              ░░░░░░████░░░░░░░░░░ Week 4-5
Step 4: 외부 저장소 + 결제 시스템       ░░░░░░░░░░████░░░░░░ Week 6-8
Step 5: 관리자 페이지 + 운영 시스템     ░░░░░░░░░░░░░░████░░ Week 9-11
Step 6: 최종 점검 + 런칭               ░░░░░░░░░░░░░░░░░░██ Week 12
```

---

### Step 1️⃣ 프로젝트 초기 설정 및 랜딩 페이지 제작 (Week 1-2)

서비스의 얼굴이 될 사이트 외형을 만들고 관리 환경을 구축합니다.

#### 1.1 프로젝트 생성

```bash
# Next.js 프로젝트 생성 (폴더명: 영문 소문자 + 하이픈)
npx create-next-app@latest climax-web --typescript --tailwind --app --src-dir

# 프로젝트 폴더 이동
cd climax-web

# 필수 패키지 설치
npm install @supabase/supabase-js @supabase/ssr
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install @tanstack/react-query zustand
npm install @vimeo/player
```

#### 1.2 shadcn/ui 설정

```bash
# shadcn/ui 초기화
npx shadcn@latest init

# 필요한 컴포넌트 설치
npx shadcn@latest add button card input label
npx shadcn@latest add dialog dropdown-menu avatar
npx shadcn@latest add tabs table badge
```

#### 1.3 버전 관리 (Git + GitHub)

```bash
# Git 초기화 및 GitHub 연동
git init
git add .
git commit -m "Initial commit: Next.js project setup"

# GitHub 저장소 생성 후
git remote add origin https://github.com/username/climax-web.git
git push -u origin main
```

#### 1.4 랜딩 페이지 구성 (AI 활용)

AI(Cursor/Claude)에 아래 프롬프트로 각 섹션 생성:

```
📝 AI 프롬프트 예시:

"Next.js 14 App Router를 사용하는 강의 판매 사이트의 랜딩 페이지를 만들어줘.
다음 6개 섹션으로 구성해줘:

1. Header: 로고, 네비게이션 메뉴 (강의 목록, 가격, 로그인)
2. Hero Section: 메인 타이틀, 서브 타이틀, CTA 버튼, 히어로 이미지
3. 강의 소개: 3개의 강의 카드 (썸네일, 제목, 가격, 수강생 수)
4. 샘플 갤러리: 무료 미리보기 영상 섹션
5. CTA Section: 결제 유도 문구, 가격 정보, 구매 버튼
6. Footer: 연락처, 소셜 링크, 이용약관/개인정보처리방침

Tailwind CSS와 shadcn/ui를 사용하고, 반응형으로 만들어줘."
```

#### 1.5 이미지 최적화

```
public/
├── images/
│   ├── hero/
│   │   └── main-hero.webp      # WebP 형식 사용!
│   ├── courses/
│   │   ├── course-1.webp
│   │   └── course-2.webp
│   └── logos/
│       └── logo.svg
└── fonts/
    └── pretendard.woff2
```

> ⚠️ **중요**: PNG/JPG 대신 **WebP 형식** 사용으로 로딩 속도 향상

#### 1.6 Week 1-2 체크리스트

- [ ] Next.js 프로젝트 생성 (영문 소문자 + 하이픈 폴더명)
- [ ] TypeScript + Tailwind CSS 설정
- [ ] shadcn/ui 컴포넌트 설치
- [ ] Git 초기화 + GitHub 연동
- [ ] 랜딩 페이지 6개 섹션 완성
  - [ ] Header
  - [ ] Hero Section
  - [ ] 강의 소개 인터페이스
  - [ ] 샘플 갤러리
  - [ ] CTA (결제 유도)
  - [ ] Footer
- [ ] 이미지 WebP 변환 및 최적화
- [ ] 반응형 레이아웃 확인

---

### Step 2️⃣ 도메인 연결 및 배포 (Week 3)

사이트를 온라인에 공개하고 접속 주소를 설정합니다.

#### 2.1 Vercel 배포

```bash
# Vercel CLI 설치 (선택사항)
npm i -g vercel

# 배포 (또는 Vercel 웹사이트에서 GitHub 연동)
vercel
```

**Vercel 웹 배포 방법:**
1. [vercel.com](https://vercel.com) 접속
2. "Add New Project" 클릭
3. GitHub 저장소 연결
4. "Deploy" 클릭

#### 2.2 도메인 구매

추천 도메인 등록 업체:
- **호스팅KR** (hosting.kr) - 한국
- **가비아** (gabia.com) - 한국
- **Namecheap** - 해외

#### 2.3 Cloudflare DNS 설정

1. [Cloudflare](https://cloudflare.com) 계정 생성
2. 도메인 추가
3. 네임서버 변경 (도메인 등록 업체에서)

```
# Cloudflare 네임서버 예시
ns1.cloudflare.com
ns2.cloudflare.com
```

4. DNS 레코드 설정:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | @ | 76.76.21.21 | Proxied |
| CNAME | www | cname.vercel-dns.com | Proxied |

#### 2.4 Vercel 도메인 연결

1. Vercel 프로젝트 → Settings → Domains
2. 구매한 도메인 입력
3. DNS 설정 완료 대기 (최대 48시간, 보통 몇 분)

#### 2.5 Week 3 체크리스트

- [ ] Vercel 계정 생성
- [ ] GitHub 저장소 연결
- [ ] 첫 배포 성공
- [ ] 도메인 구매
- [ ] Cloudflare 계정 생성
- [ ] 네임서버 변경
- [ ] DNS 레코드 설정 (A, CNAME)
- [ ] Vercel 도메인 연결
- [ ] SSL 인증서 자동 발급 확인
- [ ] https://yourdomain.com 접속 확인

---

### Step 3️⃣ 데이터베이스 및 회원가입 구현 (Week 4-5)

강의 결제 정보와 사용자 데이터를 저장할 환경을 구축합니다.

#### 3.1 Supabase 프로젝트 생성

1. [supabase.com](https://supabase.com) 접속
2. "New Project" 클릭
3. 프로젝트 정보 입력:
   - Name: climax-web
   - Database Password: (강력한 비밀번호)
   - Region: Northeast Asia (Seoul)

#### 3.2 환경 변수 설정

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxx...

# 암호화 키 (32바이트)
ENCRYPTION_KEY=your-32-byte-encryption-key-here
```

#### 3.3 Supabase 클라이언트 설정

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

```typescript
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {}
        },
      },
    }
  )
}
```

#### 3.4 profiles 테이블 생성

```sql
-- supabase/migrations/001_create_profiles.sql

-- profiles 테이블 생성
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email_encrypted TEXT,           -- AES-256 암호화
  name_encrypted TEXT,            -- AES-256 암호화
  nickname TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS 활성화
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- RLS 정책: 본인 데이터만 조회
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- RLS 정책: 본인 데이터만 수정
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- 자동 프로필 생성 트리거
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, nickname)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

#### 3.5 소셜 로그인 설정

**Google OAuth:**
1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. OAuth 2.0 클라이언트 ID 생성
3. Supabase Dashboard → Authentication → Providers → Google
4. Client ID, Secret 입력

**Kakao OAuth:**
1. [Kakao Developers](https://developers.kakao.com) 접속
2. 애플리케이션 생성
3. 카카오 로그인 활성화
4. Redirect URI: `https://xxxxx.supabase.co/auth/v1/callback`

#### 3.6 로그인 컴포넌트

```typescript
// components/auth/LoginButton.tsx
'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

export function GoogleLoginButton() {
  const supabase = createClient()

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
  }

  return (
    <Button onClick={handleLogin} variant="outline" className="w-full">
      <img src="/images/google-icon.svg" className="w-5 h-5 mr-2" />
      Google로 계속하기
    </Button>
  )
}
```

#### 3.7 Week 4-5 체크리스트

- [ ] Supabase 프로젝트 생성
- [ ] 환경 변수 설정 (.env.local)
- [ ] Supabase 클라이언트 설정 (client, server)
- [ ] profiles 테이블 생성
- [ ] RLS 정책 설정
- [ ] 자동 프로필 생성 트리거
- [ ] Google OAuth 설정
- [ ] Kakao OAuth 설정
- [ ] 로그인/회원가입 페이지 UI
- [ ] 인증 콜백 처리
- [ ] 로그아웃 기능
- [ ] 프로필 페이지

---

### Step 4️⃣ 외부 저장소 및 결제 시스템 구축 (Week 6-8)

강의 영상과 자료를 저장하고 실제 수익을 창출하는 핵심 단계입니다.

#### 4.1 Vimeo DRM 설정

**Vimeo 플랜 선택:**
| 플랜 | 가격 | DRM | 권장 |
|------|------|-----|------|
| Pro | $20/월 | ❌ | |
| Business | $50/월 | 도메인 제한만 | |
| **Premium** | **$75/월** | **✅ 풀 DRM** | **⭐ 권장** |
| Enterprise | 문의 | ✅ 최고 수준 | |

**Vimeo API 설정:**
1. [Vimeo Developer](https://developer.vimeo.com) 접속
2. "Create App" 클릭
3. Access Token 생성

```env
# .env.local에 추가
VIMEO_ACCESS_TOKEN=your_access_token
VIMEO_CLIENT_ID=your_client_id
VIMEO_CLIENT_SECRET=your_client_secret
```

**비디오 플레이어 컴포넌트:**

```typescript
// components/video/VideoPlayer.tsx
'use client'

import { useEffect, useRef } from 'react'
import Player from '@vimeo/player'

interface VideoPlayerProps {
  vimeoId: string
  onProgress?: (seconds: number, percent: number) => void
  onEnded?: () => void
  startTime?: number
}

export function VideoPlayer({ vimeoId, onProgress, onEnded, startTime = 0 }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    playerRef.current = new Player(containerRef.current, {
      id: parseInt(vimeoId),
      responsive: true,
      dnt: true,
    })

    if (startTime > 0) {
      playerRef.current.setCurrentTime(startTime)
    }

    playerRef.current.on('timeupdate', (data) => {
      onProgress?.(data.seconds, data.percent)
    })

    playerRef.current.on('ended', () => onEnded?.())

    return () => { playerRef.current?.destroy() }
  }, [vimeoId])

  return <div ref={containerRef} className="aspect-video w-full rounded-lg overflow-hidden" />
}
```

**Vimeo 보안 설정:**
1. Video Settings → Privacy → "Hide from Vimeo"
2. Embed → "Specific domains only"
3. Download → 비활성화

#### 4.2 Cloudflare R2 연동 (강의 자료 저장)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) 접속
2. R2 → Create Bucket → "climax-assets"
3. API Token 생성

```env
# .env.local에 추가
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=climax-assets
```

```typescript
// lib/r2.ts
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

// 파일 업로드
export async function uploadFile(key: string, body: Buffer, contentType: string) {
  await r2Client.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    Body: body,
    ContentType: contentType,
  }))
  return key
}

// 서명된 다운로드 URL 생성 (1시간 유효)
export async function getDownloadUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
  })
  return await getSignedUrl(r2Client, command, { expiresIn: 3600 })
}
```

#### 4.3 토스페이먼츠 연동

**가맹점 신청:**
1. [토스페이먼츠](https://www.tosspayments.com) 가맹점 신청
2. 테스트 API 키 발급
3. 개발 완료 후 실 서비스 키로 전환

```env
# .env.local에 추가 (테스트 키)
NEXT_PUBLIC_TOSS_CLIENT_KEY=test_ck_xxx
TOSS_SECRET_KEY=test_sk_xxx
```

**결제 위젯 설정:**

```typescript
// components/payment/TossPayment.tsx
'use client'

import { useEffect, useRef } from 'react'
import { loadTossPayments, TossPaymentsWidgets } from '@tosspayments/tosspayments-sdk'

interface PaymentProps {
  orderId: string
  orderName: string
  amount: number
  customerEmail: string
  customerName: string
}

export function TossPayment({ orderId, orderName, amount, customerEmail, customerName }: PaymentProps) {
  const widgetsRef = useRef<TossPaymentsWidgets | null>(null)

  useEffect(() => {
    async function initWidget() {
      const tossPayments = await loadTossPayments(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!)
      const widgets = tossPayments.widgets({ customerKey: orderId })
      widgetsRef.current = widgets

      await widgets.setAmount({ currency: 'KRW', value: amount })
      await widgets.renderPaymentMethods({
        selector: '#payment-methods',
        variantKey: 'DEFAULT',
      })
      await widgets.renderAgreement({
        selector: '#agreement',
        variantKey: 'AGREEMENT',
      })
    }
    initWidget()
  }, [amount, orderId])

  const handlePayment = async () => {
    await widgetsRef.current?.requestPayment({
      orderId,
      orderName,
      customerEmail,
      customerName,
      successUrl: `${window.location.origin}/payment/success`,
      failUrl: `${window.location.origin}/payment/fail`,
    })
  }

  return (
    <div className="space-y-4">
      <div id="payment-methods" />
      <div id="agreement" />
      <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
      >
        {amount.toLocaleString()}원 결제하기
      </button>
    </div>
  )
}
```

**결제 승인 API:**

```typescript
// app/api/payments/confirm/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { paymentKey, orderId, amount } = await request.json()

  const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.TOSS_SECRET_KEY + ':').toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ paymentKey, orderId, amount }),
  })

  const data = await response.json()

  if (!response.ok) {
    return NextResponse.json({ error: data.message }, { status: 400 })
  }

  // TODO: DB에 결제 정보 저장, 수강권 지급

  return NextResponse.json(data)
}
```

#### 4.4 크레딧 시스템 설계 (선입선출 FIFO)

```sql
-- 크레딧 테이블
CREATE TABLE credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount INT NOT NULL,
  remaining INT NOT NULL,
  source TEXT NOT NULL, -- 'purchase', 'refund', 'bonus'
  order_id UUID,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 크레딧 사용 내역
CREATE TABLE credit_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  credit_id UUID REFERENCES credits(id),
  amount INT NOT NULL,
  course_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### 4.5 Week 6-8 체크리스트

- [ ] Vimeo Premium 계정 생성
- [ ] Vimeo API 연동
- [ ] 비디오 플레이어 구현
- [ ] Vimeo 보안 설정 (도메인 제한, DRM)
- [ ] Cloudflare R2 버킷 생성
- [ ] R2 파일 업로드/다운로드 구현
- [ ] 토스페이먼츠 가맹점 신청
- [ ] 결제 위젯 구현
- [ ] 결제 승인 API
- [ ] 결제 성공/실패 페이지
- [ ] 크레딧 시스템 구현
- [ ] 환불 정책 및 로직

---

### Step 5️⃣ 관리자 페이지 및 운영 시스템 (Week 9-11)

운영자가 강의 판매 현황을 관리하고 보안을 유지하는 단계입니다.

#### 5.1 관리자 페이지 구성

```
app/admin/
├── layout.tsx          # 관리자 레이아웃 + 권한 체크
├── page.tsx            # 대시보드 (매출, 통계)
├── users/
│   └── page.tsx        # 회원 관리
├── orders/
│   └── page.tsx        # 결제/환불 관리
├── courses/
│   ├── page.tsx        # 강의 목록
│   └── [id]/edit/
│       └── page.tsx    # 강의 수정
└── settings/
    └── page.tsx        # 설정
```

**관리자 권한 체크:**

```typescript
// app/admin/layout.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') {
    redirect('/')
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
```

#### 5.2 대시보드 통계

```typescript
// app/admin/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function AdminDashboard() {
  // TODO: 실제 데이터 조회
  const stats = {
    todayRevenue: 1250000,
    monthlyRevenue: 15800000,
    totalUsers: 1234,
    activeUsers: 456,
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">대시보드</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">오늘 매출</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ₩{stats.todayRevenue.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">이번 달 매출</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ₩{stats.monthlyRevenue.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">전체 회원</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.totalUsers}명</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">활성 회원</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.activeUsers}명</p>
          </CardContent>
        </Card>
      </div>

      {/* 매출 그래프, 최근 주문 등 */}
    </div>
  )
}
```

#### 5.3 Week 9-11 체크리스트

- [ ] 관리자 레이아웃 + 권한 체크
- [ ] 대시보드 (매출 통계, 차트)
- [ ] 회원 관리 페이지
- [ ] 결제/환불 관리
- [ ] 강의 관리 (CRUD)
- [ ] 쿠폰 관리
- [ ] 공지사항 관리
- [ ] 개인정보 암호화 (AES-256)
- [ ] 접속 로그 기록
- [ ] 90일 로그 자동 삭제

---

### Step 6️⃣ 최종 점검 및 런칭 (Week 12)

서비스 출시 전 마지막 최적화 작업을 수행합니다.

#### 6.1 보안 점검

```bash
# Supabase 보안 점검
- Dashboard → Database → Security Advisor 확인
- RLS 정책 재검토
- API 키 노출 여부 확인
```

#### 6.2 성능 최적화

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
```

#### 6.3 반응형 체크

- [ ] PC (1920px, 1440px, 1280px)
- [ ] 태블릿 (1024px, 768px)
- [ ] 모바일 (425px, 375px, 320px)

#### 6.4 최종 코드 정리

- [ ] 하드코딩된 민감 정보 제거
- [ ] `console.log` 제거
- [ ] 미사용 코드/import 제거
- [ ] TypeScript 에러 해결
- [ ] ESLint 경고 해결

#### 6.5 Week 12 체크리스트

- [ ] Supabase Security Advisor 점검
- [ ] RLS 정책 최종 검토
- [ ] 성능 최적화 (이미지, 번들 사이즈)
- [ ] 반응형 전 기기 테스트
- [ ] 결제 실제 테스트 (테스트 키 → 실 서비스 키)
- [ ] 이메일 발송 테스트
- [ ] 코드 정리 (console.log, 하드코딩 제거)
- [ ] robots.txt, sitemap.xml 생성
- [ ] Google Search Console 등록
- [ ] 🚀 **런칭!**

---

## 4. 핵심 기능 명세

### 4.1 사용자 기능

| 기능 | 설명 |
|------|------|
| 소셜 로그인 | Google, Kakao 로그인 |
| 프로필 관리 | 닉네임, 프로필 이미지 변경 |
| 강의 구매 | 장바구니, 결제, 쿠폰 적용 |
| 강의 시청 | DRM 비디오 플레이어, 진도 저장 |
| 수강 현황 | 진도율, 수료증 발급 |
| Q&A | 강의별 질문/답변 |

### 4.2 관리자 기능

| 기능 | 설명 |
|------|------|
| 대시보드 | 매출, 가입자, 활성 사용자 통계 |
| 회원 관리 | 조회, 강의 지급, 계정 정지 |
| 결제 관리 | 결제 내역, 환불 처리 |
| 강의 관리 | 등록, 수정, 삭제, Vimeo 연동 |
| 쿠폰 관리 | 생성, 수정, 사용 현황 |

---

## 5. 데이터베이스 설계

### 5.1 ERD

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  profiles   │────<│ enrollments │>────│   courses   │
│  (회원)     │     │  (수강)     │     │   (강의)    │
└─────────────┘     └─────────────┘     └─────────────┘
      │                   │                   │
      │                   │                   │
      ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   orders    │     │  progress   │     │  sections   │
│   (주문)    │     │  (진도)     │     │  (섹션)     │
└─────────────┘     └─────────────┘     └─────────────┘
      │                                       │
      ▼                                       ▼
┌─────────────┐                         ┌─────────────┐
│   credits   │                         │   lessons   │
│  (크레딧)   │                         │  (레슨)     │
└─────────────┘                         └─────────────┘
```

### 5.2 주요 테이블

```sql
-- 강의
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  price INT DEFAULT 0,
  sale_price INT,
  status TEXT DEFAULT 'draft', -- draft, published, archived
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 섹션
CREATE TABLE sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  order_num INT DEFAULT 0
);

-- 레슨
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  vimeo_id TEXT,
  duration INT DEFAULT 0, -- 초 단위
  order_num INT DEFAULT 0,
  is_free BOOLEAN DEFAULT FALSE
);

-- 수강
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- 진도
CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  watched_seconds INT DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- 주문
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES profiles(id),
  total_amount INT NOT NULL,
  discount_amount INT DEFAULT 0,
  final_amount INT NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, paid, cancelled, refunded
  payment_key TEXT,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 6. 보안 및 법적 준수

### 6.1 개인정보 암호화 (AES-256 GCM)

민감한 개인정보는 암호화하여 저장하고, 관리자 페이지에서만 복호화합니다.

```typescript
// lib/encryption.ts
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const ALGORITHM = 'aes-256-gcm'
const KEY = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex')

export function encrypt(text: string): string {
  const iv = randomBytes(16)
  const cipher = createCipheriv(ALGORITHM, KEY, iv)

  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  const authTag = cipher.getAuthTag()

  // iv:authTag:encrypted 형식으로 저장
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
}

export function decrypt(encryptedData: string): string {
  const [ivHex, authTagHex, encrypted] = encryptedData.split(':')

  const iv = Buffer.from(ivHex, 'hex')
  const authTag = Buffer.from(authTagHex, 'hex')

  const decipher = createDecipheriv(ALGORITHM, KEY, iv)
  decipher.setAuthTag(authTag)

  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}
```

**암호화 대상 필드:**
- 이메일 (email_encrypted)
- 이름 (name_encrypted)
- IP 주소 (로그 테이블)

### 6.2 접속 로그 (통신비밀보호법 준수)

통신비밀보호법에 따라 **90일간** 접속 기록을 보관합니다.

```sql
-- 접속 로그 테이블
CREATE TABLE access_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  action TEXT NOT NULL, -- login, logout, page_view, purchase
  ip_address_encrypted TEXT,
  user_agent TEXT,
  page_path TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 90일 지난 로그 자동 삭제 (Supabase Edge Function 또는 Cron)
CREATE OR REPLACE FUNCTION delete_old_logs()
RETURNS void AS $$
BEGIN
  DELETE FROM access_logs
  WHERE created_at < NOW() - INTERVAL '90 days';
END;
$$ LANGUAGE plpgsql;

-- pg_cron 확장 사용 시
SELECT cron.schedule('delete-old-logs', '0 3 * * *', 'SELECT delete_old_logs()');
```

### 6.3 RLS 정책 예시

```sql
-- 강의: 공개된 강의만 조회 가능
CREATE POLICY "Public courses are viewable by everyone"
  ON courses FOR SELECT
  USING (status = 'published');

-- 수강: 본인 수강 정보만 조회
CREATE POLICY "Users can view own enrollments"
  ON enrollments FOR SELECT
  USING (auth.uid() = user_id);

-- 진도: 본인 진도만 조회/수정
CREATE POLICY "Users can manage own progress"
  ON progress FOR ALL
  USING (auth.uid() = user_id);
```

### 6.4 보안 체크리스트

- [ ] 모든 테이블 RLS 활성화
- [ ] 민감 정보 AES-256 암호화
- [ ] 접속 로그 90일 보관
- [ ] 환경 변수에 비밀키 저장 (코드에 하드코딩 금지)
- [ ] HTTPS 강제 적용
- [ ] SQL Injection 방지 (Prepared Statement)
- [ ] XSS 방지 (React 자동 이스케이프)
- [ ] CSRF 토큰 적용

---

## 7. 예상 비용

### 7.1 초기 비용

| 항목 | 비용 | 비고 |
|------|------|------|
| 도메인 | ₩15,000~30,000/년 | .com 기준 |

### 7.2 월간 운영 비용

| 항목 | 무료 | Pro | 비고 |
|------|------|-----|------|
| **Vercel** | ✅ | $20/월 | 초기 무료 가능 |
| **Supabase** | ✅ | $25/월 | 500MB DB 무료 |
| **Vimeo Premium** | - | **$75/월** | DRM 필수 |
| **Cloudflare R2** | ✅ | 사용량 기반 | 10GB 무료 |
| **합계 (무료)** | **~$75/월** | | Vimeo만 유료 |
| **합계 (Pro)** | **~$120/월** | | 트래픽 증가 시 |

### 7.3 결제 수수료

| 결제 수단 | 수수료 |
|----------|--------|
| 토스페이먼츠 | 2.5~3.5% |

---

## 8. 체크리스트

### 8.1 전체 진행 체크리스트

#### Step 1: 프로젝트 초기 설정 + 랜딩 페이지
- [ ] Next.js 프로젝트 생성
- [ ] TypeScript + Tailwind + shadcn/ui 설정
- [ ] Git + GitHub 연동
- [ ] 랜딩 페이지 6개 섹션 완성
- [ ] 이미지 WebP 최적화

#### Step 2: 도메인 연결 + 배포
- [ ] Vercel 배포
- [ ] 도메인 구매
- [ ] Cloudflare DNS 설정
- [ ] SSL 확인

#### Step 3: DB + 회원가입
- [ ] Supabase 프로젝트 생성
- [ ] profiles 테이블 + RLS
- [ ] Google OAuth 설정
- [ ] Kakao OAuth 설정
- [ ] 로그인/회원가입 UI

#### Step 4: 저장소 + 결제
- [ ] Vimeo Premium 설정
- [ ] 비디오 플레이어 구현
- [ ] Cloudflare R2 연동
- [ ] 토스페이먼츠 연동
- [ ] 결제 프로세스 완성

#### Step 5: 관리자 + 운영
- [ ] 관리자 대시보드
- [ ] 회원/결제/강의 관리
- [ ] 개인정보 암호화
- [ ] 접속 로그 시스템

#### Step 6: 최종 점검 + 런칭
- [ ] 보안 점검
- [ ] 성능 최적화
- [ ] 반응형 테스트
- [ ] 코드 정리
- [ ] 🚀 런칭

---

## 9. 참고 자료

### 공식 문서
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vimeo Developer API](https://developer.vimeo.com)
- [토스페이먼츠 개발자센터](https://docs.tosspayments.com)
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2)
- [shadcn/ui](https://ui.shadcn.com)

### 개발 도구
- [Cursor](https://cursor.com) - AI 코딩 에디터
- [Claude](https://claude.ai) - AI 어시스턴트

---

> **마지막 업데이트**: 2026년 1월 3일  
> **문서 버전**: 2.0.0

