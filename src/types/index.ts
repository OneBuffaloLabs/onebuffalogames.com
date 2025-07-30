export interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  isComingSoon?: boolean;
  fontClass?: string;
}

export interface UpdateData {
  date: string;
  description: string;
}
