import type { PortfolioMessages } from '@/types/portfolio'

const vi: PortfolioMessages = {
  meta: {
    locale: 'vi-VN',
    title: 'Mujin — Creative Developer',
    description: 'Portfolio của Mujin — Frontend developer tập trung vào trải nghiệm số rõ ràng, đẹp và hữu ích.',
  },
  nav: {
    work: 'Dự án',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    menu: 'Mở menu',
    home: 'Về đầu trang',
    language: 'Đổi sang tiếng Anh',
  },
  hero: {
    kicker: 'Frontend developer × Creative thinker',
    title: 'Tạo nên trải nghiệm số',
    emphasis: 'đáng nhớ',
    description: 'Tôi giúp ý tưởng trở thành những sản phẩm số rõ ràng, đẹp và thực sự hữu ích — từ chiến lược đến từng dòng code.',
    explore: 'Xem dự án',
    scroll: 'CUỘN ĐỂ KHÁM PHÁ',
  },
  work: {
    highlightsLabel: 'Điểm nổi bật',
    stackLabel: 'Công nghệ sử dụng',
    sourceLabel: 'Mã nguồn',
    projects: {
      evidence: {
        id: '01',
        name: 'Evidence Note Board',
        category: 'LINUX DESKTOP APPLICATION',
        status: 'Đang phát triển · v0.4.0',
        description: 'Bảng ghi chú kiểu điều tra xuất hiện ngay trên desktop Fedora GNOME Wayland. Ghim văn bản và hình ảnh, nối chúng bằng dây đỏ, thu phóng và quản lý nhiều board mà không cần tài khoản hay cloud.',
        highlights: [
          'GNOME Shell Extension hiển thị và tương tác ngay tại desktop layer.',
          'Hỗ trợ nhiều board, note văn bản/ảnh và liên kết bằng dây đỏ.',
          'Rust backend giao tiếp qua D-Bus, lưu dữ liệu cục bộ bằng SQLite.',
        ],
        tags: ['Rust', 'GJS', 'GNOME Shell', 'Wayland', 'SQLite', 'D-Bus'],
        links: [
          { label: 'GitHub', href: 'https://github.com/mujin0422/evidence-note-board' },
        ],
      },
      network: {
        id: '02',
        name: 'Network Multi-Agent System',
        category: 'AI / NETWORK AUTOMATION',
        status: 'Đang phát triển',
        description: 'Nền tảng thử nghiệm tự động hóa mạng với nhiều AI agent. Backend Python tổ chức theo domain service, kết hợp dashboard React để theo dõi hội thoại, tác vụ, thiết bị và phân quyền.',
        highlights: [
          'FastAPI, PostgreSQL và JWT/RBAC cho API, inventory và quản lý truy cập.',
          'LangGraph, LLM và Netmiko/Nornir cho hướng điều phối và tự động hóa mạng.',
          'Dashboard React/TypeScript; nhiều màn hình đang dùng dữ liệu mẫu và chờ tích hợp backend.',
        ],
        tags: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'TypeScript', 'GNS3', 'Docker'],
        links: [
          { label: 'Backend', href: 'https://github.com/mujin0422/network-multi-agent-system-backend' },
          { label: 'Frontend', href: 'https://github.com/mujin0422/network-multi-agent-system-frontend' },
        ],
      },
    },
  },
  about: {
    eyebrow: '02 / TÔI LÀ AI',
    title: 'Code tốt giải quyết vấn đề.',
    emphasis: 'Code tuyệt vời',
    titleEnd: 'còn tạo cảm xúc.',
    paragraphs: [
      'Tôi là Mujin — frontend developer yêu những giao diện có nhịp điệu, sản phẩm có logic và những chi tiết khiến người dùng mỉm cười.',
      'Tôi làm việc ở giao điểm giữa thiết kế và kỹ thuật, đủ gần với cả hai để giữ nguyên tinh thần của ý tưởng khi nó đi vào thực tế.',
    ],
    locationLabel: 'Đang sống tại',
    location: 'Việt Nam',
    orbit: 'THỦ CÔNG • TÒ MÒ • RÕ RÀNG • ',
    quote: 'Tôi tin thiết kế tốt không cần phải hét lớn — nó chỉ cần nói đúng điều, đúng lúc.',
  },
  services: {
    eyebrow: '03 / TÔI CÓ THỂ GIÚP GÌ',
    title: 'Từ ý tưởng',
    emphasis: 'đến sản phẩm.',
    items: [
      { number: '01', title: 'Giao diện web', description: 'Xây dựng giao diện responsive, có hệ thống và dễ phát triển tiếp bằng React.' },
      { number: '02', title: 'Trải nghiệm sản phẩm', description: 'Biến luồng sử dụng phức tạp thành trải nghiệm rõ ràng, tự nhiên và nhất quán.' },
      { number: '03', title: 'Creative development', description: 'Thêm chuyển động và tương tác có chủ đích để sản phẩm có cá tính riêng.' },
    ],
  },
  contact: {
    eyebrow: '04 / BẮT ĐẦU MỘT ĐIỀU HAY',
    title: 'Có một ý tưởng?',
    emphasis: 'Cùng làm nó sống dậy.',
    email: 'YOUR@EMAIL.COM',
    copied: 'ĐÃ SAO CHÉP!',
    localTime: 'GIỜ ĐỊA PHƯƠNG',
    findMe: 'TÌM TÔI TRÊN',
  },
  footer: {
    crafted: 'THIẾT KẾ CÓ CHỦ ĐÍCH • XÂY DỰNG BẰNG REACT',
    top: 'LÊN ĐẦU TRANG ↑',
  },
}

export default vi
