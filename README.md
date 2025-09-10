# 상품 코드 관리 (product-code-management)

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss)
![Zustand](https://img.shields.io/badge/Zustand-5-orange)
![FormKit](https://img.shields.io/badge/FormKit-Drag--and--Drop-FF69B4)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?logo=prettier)
![License](https://img.shields.io/badge/license-MIT-green)

🇰🇷 [한국어](#-한국어-버전) | 🇺🇸 [English](#-english-version)

---

## 🇰🇷 한국어 버전

### 개요

**Next.js + TypeScript** 기반으로 개발한 **상품 코드 관리 시스템**입니다.

상태 관리, 드래그 앤 드롭, 모달 시스템 등 프론트엔드 아키텍처 전반을 구현하며 유지보수성과 확장성을 고려했습니다.

---

## ✨ 주요 기능

- **상품 코드 관리**: 상품 코드와 옵션 코드를 조합해 상품 코드 체계적으로 관리
- **드래그 앤 드롭**: 리스트를 직관적으로 재정렬 ([@formkit/drag-and-drop](https://drag-and-drop.formkit.com/) 활용)
- **상태 관리 (Zustand)**: 경량 스토어를 통한 활성/비활성 항목 분리 및 관리
- **모달 시스템 (Context 기반)**: 중앙 집중식 모달 관리로 UI 일관성 확보
- **데이터 처리**: Mock data를 활용하여 프로토타입 및 기능 시연에 최적화

## 🛠 기술 스택

- **Framework**: [Next.js 14](https://nextjs.org/) (React 18, App Router)
- **Language**: TypeScript
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **UI/UX**: Tailwind CSS, Context API 기반 모달 관리
- **Utilities**: FormKit Drag-and-Drop, Mock data

## 📂 프로젝트 구조

```
product-code-management/
├── src/
│ ├── components/       # UI 컴포넌트 (모달, 드래그 리스트 등)
│ ├── stores/           # Zustand 스토어 (상품/옵션 코드 상태 관리)
│ ├── constants/        # 코드 패턴 및 목데이터
│ └── app/              # Next.js App Router
├── public/             # 정적 자산
├── eslint.config.mjs   # ESLint 설정
├── tailwind.config.ts  # Tailwind 설정
└── package.json
```

## 🚀 실행 방법

1. 레포지토리 클론 후 의존성 설치:

```bash
git clone https://github.com/kmeijjing/product-code-management.git
cd product-code-management
npm install
npm run dev
```

2. 브라우저에서 http://localhost:3000 접속

## 📸 데모 미리보기

- 드래그 앤 드롭: 상품 코드 순서 재정렬
- 상태 관리: 활성/비활성 코드 분리 및 관리
- 모달: Context 기반 중앙 관리형 모달

![상품 코드 관리 데모](./public/screenshots/demo1.png)
![상품 코드 관리 모달 데모](./public/screenshots/demo2.png)

## 🎯 프로젝트 의의

이 프로젝트는 다음을 보여줍니다:

실무적인 프론트엔드 아키텍처 설계 (Next.js, Zustand, Context API)
UI/UX 패턴 적용 (모달 관리, 드래그 앤 드롭 인터랙션)
코드 품질: TypeScript + ESLint + Prettier 기반 유지보수성 높은 코드

본 프로젝트는 포트폴리오 및 채용 제출용으로 제작되었습니다.

---

## 🇺🇸 English Version

### Overview

A **Next.js + TypeScript** application for efficient **product code management**.  
Showcases frontend architecture with **state management, drag-and-drop interactions, and context-based modal handling**.

## ✨ Features

- **Product Code Management**: Organize product code system
- **Drag & Drop**: Intuitive reordering of items (using [@formkit/drag-and-drop](https://drag-and-drop.formkit.com/))
- **State Management with Zustand**: Lightweight and scalable store for product/option code separation
- **Context-based Modal System**: Centralized modal handling inspired by scalable UI architecture
- **Data Handling**: Mock data integration for rapid prototyping and demonstration

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React 18, App Router)
- **Language**: TypeScript
- **State**: [Zustand](https://github.com/pmndrs/zustand)
- **UI/UX**: Tailwind CSS, Context API for modal management
- **Utilities**: FormKit Drag-and-Drop, Mock data

## 📂 Project Structure

```
product-code-management/
├── src/
│   ├── components/    # UI components (Modal, Draggable lists, etc.)
│   ├── stores/        # Zustand store for product & option codes
│   ├── constants/     # Code patterns & mock data
│   └── app/           # Next.js app router
├── public/            # Static assets
├── eslint.config.mjs  # ESLint setup
├── tailwind.config.ts # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/kmeijjing/product-code-management.git
cd product-code-management
npm install
npm run dev
```

2. Visit http://localhost:3000 to explore.

## 📸 Demo Preview

- Drag & Drop: Reorder product codes visually
- State: Product codes separated into active/inactive using Zustand
- Modal: Open centralized dialogs via context

![product code management](./public/screenshots/demo1.png)
![product code management modal](./public/screenshots/demo2.png)

## 🎯 Why This Project

This project showcases:

- Practical frontend architecture (Next.js, Zustand, Context API)
- Scalable UI patterns (modal provider, drag & drop interactions)
- Code quality & maintainability with TypeScript + ESLint + Prettier

It is designed as a portfolio project to highlight problem-solving in UI state management and user interaction.
