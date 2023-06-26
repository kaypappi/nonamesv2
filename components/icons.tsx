import {
  AlarmClock,
  AlertTriangle,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  CreditCard,
  Crop,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeOff,
  FileTerminal,
  Filter,
  Footprints,
  HardHat,
  Image,
  Loader2,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  Plus,
  PlusCircle,
  RefreshCw,
  Search,
  Settings,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  SunMedium,
  Trash,
  Twitter,
  UploadCloud,
  User,
  Volume2,
  VolumeX,
  Wallet,
  X,
  type Icon as LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  menu: Menu,
  verticalThreeDots: MoreVertical,
  horizontalThreeDots: MoreHorizontal,
  verticalSliders: Sliders,
  horizontalSliders: SlidersHorizontal,
  circle: Circle,
  check: Check,
  add: Plus,
  addCircle: PlusCircle,
  view: Eye,
  hide: EyeOff,
  trash: Trash,
  edit: Edit,
  crop: Crop,
  reset: RefreshCw,
  downlaod: Download,
  warning: AlertTriangle,
  search: Search,
  filter: Filter,
  alarm: AlarmClock,
  calendar: CalendarDays,
  user: User,
  dashboard: FileTerminal,
  settings: Settings,
  logout: LogOut,
  volumne: Volume2,
  volumneMute: VolumeX,
  message: MessageSquare,
  billing: CreditCard,
  wallet: Wallet,
  dollarSign: DollarSign,
  cart: ShoppingCart,
  product: Package,
  store: ShoppingBag,
  chart: BarChart3,
  upload: UploadCloud,
  placeholder: Image,
  clothing: Shirt,
  shoes: Footprints,
  accessories: HardHat,
  logo: (props: LucideProps) => (
    <svg width="98" height="16" viewBox="0 0 98 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_12_21)">
        <path d="M55.5655 15.5676C54.8418 15.5676 54.1346 15.3627 53.5327 14.9789C52.9308 14.5951 52.4621 14.0496 52.185 13.4114C51.9083 12.7732 51.8355 12.0709 51.9768 11.3934C52.1182 10.7159 52.4664 10.0935 52.9781 9.60509C53.4898 9.11661 54.1419 8.78399 54.8518 8.6492C55.5612 8.51445 56.2971 8.5836 56.9657 8.84794C57.634 9.11229 58.2055 9.55999 58.6075 10.1343C59.0094 10.7087 59.2241 11.384 59.2241 12.0748C59.2241 13.0012 58.8386 13.8895 58.1526 14.5445C57.4666 15.1996 56.5356 15.5676 55.5655 15.5676ZM55.5655 9.74632C55.0829 9.74632 54.6116 9.88288 54.2105 10.1388C53.8094 10.3946 53.4963 10.7583 53.312 11.1837C53.1273 11.6092 53.0791 12.0774 53.1728 12.5291C53.2673 12.9808 53.4997 13.3957 53.8406 13.7213C54.1818 14.0469 54.6163 14.2687 55.0894 14.3586C55.5625 14.4484 56.0534 14.4023 56.4987 14.2261C56.9445 14.0498 57.3256 13.7514 57.5936 13.3685C57.8616 12.9855 58.0043 12.5353 58.0043 12.0748C58.0043 11.4572 57.7476 10.865 57.2901 10.4283C56.8326 9.99164 56.2125 9.74632 55.5655 9.74632ZM64.7121 15.5676C63.9888 15.5676 63.2811 15.3627 62.6797 14.9789C62.0778 14.5951 61.609 14.0496 61.3319 13.4114C61.0553 12.7732 60.9824 12.0709 61.1238 11.3934C61.2652 10.7159 61.6134 10.0935 62.125 9.60509C62.6367 9.11661 63.2889 8.78399 63.9983 8.6492C64.7082 8.51445 65.444 8.5836 66.1123 8.84794C66.7809 9.11229 67.3524 9.55999 67.7544 10.1343C68.1564 10.7087 68.371 11.384 68.371 12.0748C68.371 13.0012 67.9855 13.8895 67.2995 14.5445C66.6135 15.1996 65.6825 15.5676 64.7121 15.5676ZM64.7121 9.74632C64.2299 9.74632 63.7581 9.88288 63.357 10.1388C62.9559 10.3946 62.6432 10.7583 62.4589 11.1837C62.2742 11.6092 62.2256 12.0774 62.3197 12.5291C62.4138 12.9808 62.6463 13.3957 62.9875 13.7213C63.3288 14.0469 63.7633 14.2687 64.2364 14.3586C64.7095 14.4484 65.1999 14.4023 65.6457 14.2261C66.0914 14.0498 66.4726 13.7514 66.7401 13.3685C67.0081 12.9855 67.1512 12.5353 67.1512 12.0748C67.1512 11.4572 66.8945 10.865 66.437 10.4283C65.9796 9.99164 65.359 9.74632 64.7121 9.74632Z" fill="#E1E1E1" />
        <path d="M58.6144 11.4986H61.6632V12.6628H58.6144V11.4986Z" fill="#E1E1E1" />
        <path d="M55.5656 14.9913C57.2494 14.9913 58.6144 13.6882 58.6144 12.0807C58.6144 10.4732 57.2494 9.17007 55.5656 9.17007C53.8818 9.17007 52.5163 10.4732 52.5163 12.0807C52.5163 13.6882 53.8818 14.9913 55.5656 14.9913Z" fill="#E1E1E1" />
        <path d="M64.7121 14.9913C66.3959 14.9913 67.7609 13.6882 67.7609 12.0807C67.7609 10.4732 66.3959 9.17007 64.7121 9.17007C63.0283 9.17007 61.6633 10.4732 61.6633 12.0807C61.6633 13.6882 63.0283 14.9913 64.7121 14.9913Z" fill="#E1E1E1" />
        <path d="M68.0662 6.25949H52.2114C51.8749 6.25949 51.6017 6.52012 51.6017 6.84163C51.6017 7.1631 51.8749 7.42373 52.2114 7.42373H68.0662C68.4027 7.42373 68.6759 7.1631 68.6759 6.84163C68.6759 6.52012 68.4027 6.25949 68.0662 6.25949Z" fill="#E1E1E1" />
        <path d="M66.9808 7.4179H53.2968L54.5166 1.74221C54.5925 1.37821 54.7972 1.04997 55.0951 0.811807C55.3934 0.573636 55.7681 0.439798 56.1566 0.432434H64.1145C64.5087 0.433165 64.8903 0.563989 65.1947 0.802713C65.4991 1.04144 65.7081 1.37337 65.7853 1.74221L66.9808 7.4179ZM54.7846 6.25367H65.4926L64.5902 1.96924C64.5677 1.86444 64.5083 1.7702 64.4215 1.70235C64.3353 1.63451 64.2264 1.59719 64.1145 1.59668H56.1566C56.0447 1.59719 55.9363 1.63451 55.8496 1.70235C55.7633 1.7702 55.7035 1.86444 55.6809 1.96924L54.7846 6.25367Z" fill="#E1E1E1" />
        <path d="M66.2246 6.83578H54.0288L55.0838 1.85863C55.1333 1.62128 55.2668 1.40752 55.4624 1.25366C55.658 1.0998 55.9034 1.01531 56.1571 1.01456H64.1146C64.3682 1.01531 64.6137 1.0998 64.8092 1.25366C65.0048 1.40752 65.1388 1.62128 65.1878 1.85863L66.2246 6.83578Z" fill="#E1E1E1" />
        <path d="M8.55011 15.1351L3.82355 6.98379C3.69346 6.74595 3.58506 6.63784 3.52001 6.63784C3.43329 6.63784 3.38992 6.78919 3.38992 7.09189V15.1351C3.38992 15.3946 3.21647 15.5676 2.9563 15.5676H0.831517C0.57134 15.5676 0.397888 15.3946 0.397888 15.1351V0.864866C0.397888 0.605406 0.57134 0.432433 0.831517 0.432433H2.9563C3.21647 0.432433 3.45497 0.605406 3.60674 0.864866L8.3333 9.01622C8.46338 9.25406 8.57179 9.36216 8.63684 9.36216C8.72356 9.36216 8.76692 9.21081 8.76692 8.90811V0.864866C8.76692 0.605406 8.94038 0.432433 9.20055 0.432433H11.3253C11.5855 0.432433 11.759 0.605406 11.759 0.864866V15.1351C11.759 15.3946 11.5855 15.5676 11.3253 15.5676H9.20055C8.94038 15.5676 8.70188 15.3946 8.55011 15.1351ZM13.1866 8C13.1866 3.30811 16.0485 0.172974 20.2981 0.172974C24.5476 0.172974 27.4312 3.30811 27.4312 8C27.4312 12.7135 24.5476 15.827 20.2981 15.827C16.0485 15.827 13.1866 12.7135 13.1866 8ZM24.0056 8C24.0056 5.36216 23.3118 2.24865 20.2981 2.24865C17.2843 2.24865 16.6122 5.36216 16.6122 8C16.6122 10.6378 17.306 13.7514 20.3197 13.7514C23.3335 13.7514 24.0056 10.6378 24.0056 8ZM29.2552 8.10811V6.81081C29.2552 6.57297 29.4069 6.42162 29.6454 6.42162H35.2826C35.5211 6.42162 35.6729 6.57297 35.6729 6.81081V8.10811C35.6729 8.34595 35.5211 8.4973 35.2826 8.4973H29.6454C29.4069 8.4973 29.2552 8.34595 29.2552 8.10811ZM46.0904 15.1351L41.3637 6.98379C41.2336 6.74595 41.1252 6.63784 41.0602 6.63784C40.9735 6.63784 40.9301 6.78919 40.9301 7.09189V15.1351C40.9301 15.3946 40.7566 15.5676 40.4965 15.5676H38.3717C38.1115 15.5676 37.9381 15.3946 37.9381 15.1351V0.864866C37.9381 0.605406 38.1115 0.432433 38.3717 0.432433H40.4965C40.7566 0.432433 40.9951 0.605406 41.1469 0.864866L45.8735 9.01622C46.0036 9.25406 46.112 9.36216 46.1771 9.36216C46.2638 9.36216 46.3072 9.21081 46.3072 8.90811V0.864866C46.3072 0.605406 46.4806 0.432433 46.7408 0.432433H48.8656C49.1258 0.432433 49.2992 0.605406 49.2992 0.864866V15.1351C49.2992 15.3946 49.1258 15.5676 48.8656 15.5676H46.7408C46.4806 15.5676 46.2421 15.3946 46.0904 15.1351ZM74.728 6.16216L75.0099 6.61622C75.2484 7.00541 75.4002 7.61081 75.4002 8.06487V15.1351C75.4002 15.3946 75.2267 15.5676 74.9665 15.5676H72.8418C72.5816 15.5676 72.4081 15.3946 72.4081 15.1351V0.864866C72.4081 0.605406 72.5816 0.432433 72.8418 0.432433H74.9665C75.2267 0.432433 75.4652 0.605406 75.617 0.864866L79.4763 7.48108L83.3139 0.864866C83.4657 0.605406 83.7042 0.432433 83.9643 0.432433H86.0891C86.3493 0.432433 86.5227 0.605406 86.5227 0.864866V15.1351C86.5227 15.3946 86.3493 15.5676 86.0891 15.5676H83.9643C83.7042 15.5676 83.5307 15.3946 83.5307 15.1351V7.09189C83.5307 6.78919 83.4873 6.63784 83.4006 6.63784C83.3356 6.63784 83.2272 6.74595 83.0971 6.98379L79.8665 12.5838C79.7581 12.7784 79.628 12.8649 79.498 12.8649C79.3679 12.8649 79.2161 12.7568 79.1077 12.5838L75.1617 5.83784C75.0966 5.72973 74.9882 5.68649 74.9015 5.68649C74.728 5.68649 74.5546 5.88108 74.728 6.16216ZM92.1556 13.4919H97.164C97.4242 13.4919 97.5976 13.6649 97.5976 13.9243V15.1351C97.5976 15.3946 97.4242 15.5676 97.164 15.5676H88.383C88.1228 15.5676 87.9494 15.3946 87.9494 15.1351V0.864866C87.9494 0.605406 88.1228 0.432433 88.383 0.432433H97.164C97.4242 0.432433 97.5976 0.605406 97.5976 0.864866V2.07568C97.5976 2.33514 97.4242 2.50811 97.164 2.50811H90.0958C89.6839 2.50811 89.7056 3.00541 90.0958 3.00541H90.5945C91.0715 3.00541 91.375 3.30811 91.375 3.78379V5.40541C91.375 5.88108 91.6786 6.18379 92.1556 6.18379H95.9281C96.1883 6.18379 96.3618 6.35676 96.3618 6.61622V7.82703C96.3618 8.08649 96.1883 8.25946 95.9281 8.25946H92.1556C91.6786 8.25946 91.375 8.56216 91.375 9.03784V12.7135C91.375 13.1892 91.6786 13.4919 92.1556 13.4919Z" fill="#E1E1E1" />
      </g>
      <defs>
        <clipPath id="clip0_12_21">
          <rect width="98" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>

  ),

}