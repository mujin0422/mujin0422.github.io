# Mujin Portfolio

Portfolio cá nhân viết bằng React, TypeScript, Vite, Tailwind CSS và shadcn/ui, thiết kế theo hướng editorial tối giản.

## Cấu trúc

```text
src/
├── app/                    # App shell và global styles
├── components/
│   ├── layout/             # Header, Footer
│   └── ui/                 # Component shadcn/ui dùng lại
├── features/
│   ├── my-profile/         # Module rỗng, chờ xây lại
│   ├── my-project/         # Module rỗng, chờ xây lại
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

Ba feature đang được giữ rỗng có chủ đích. Khi xây lại một feature, export public component của nó qua file `index.ts` tương ứng.
