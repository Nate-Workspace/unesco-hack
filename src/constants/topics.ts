import { Users,
  Globe,
  Scale,
  Heart,
  Zap,
  TrendingUp,
BadgeMinus } from 'lucide-react'

export const topics = [
    { value: "freedom", label: "Freedom of Expression", icon: Globe },
    { value: "privacy", label: "Privacy Rights", icon: Scale },
    { value: "education", label: "Education Access", icon: Heart },
    { value: "climate", label: "Climate Justice", icon: Globe },
    { value: "health", label: "Mental Health", icon: Heart },
    { value: "equality", label: "Gender Equality", icon: Users },
    { value: "economy", label: "Economic Rights", icon: TrendingUp },
    { value: "technology", label: "AI & Technology", icon: Zap },
    { value: "other", label: "Other", icon: BadgeMinus },
  ]