# Mujin Portfolio

Portfolio cá nhân viết bằng React, TypeScript, Vite, Tailwind CSS và shadcn/ui, thiết kế theo hướng editorial tối giản.

## Cấu trúc

```text
src/
├── app/                    # App shell và global styles
├── components/
│   ├── layout/             # Header, MainContent, Footer
│   ├── shared/             # ProjectFrame tái sử dụng cho các project
│   └── ui/                 # Component shadcn/ui dùng lại
├── features/
│   ├── my-profile/         # Module rỗng, chờ xây lại
│   ├── my-project/         # Evidence Note Board và Network Multi-Agent System
│   └── my-contact/         # Module rỗng, chờ xây lại
├── i18n/
│   ├── locales/            # Nội dung tiếng Việt và tiếng Anh
│   └── I18nProvider.tsx    # Context có type, chuyển và lưu ngôn ngữ
├── hooks/                  # Reveal, local time, clipboard
├── types/                  # Model/type dùng chung của portfolio
└── main.tsx                # Entry point
```

## Chạy local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Kiểm tra TypeScript

```bash
npm run typecheck
```

## Thêm component shadcn/ui

```bash
npx shadcn@latest add <component-name>
```

Ví dụ: `npx shadcn@latest add card dialog sheet`. Cấu hình registry nằm trong `components.json`.

Hai feature `my-profile` và `my-project` đang có nội dung thực tế; `my-contact` vẫn để trống có chủ đích. Mỗi feature xuất public component qua file `index.ts` tương ứng.
