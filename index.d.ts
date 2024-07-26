interface CardProps {
  image: {
    url: string;
    altText: string;
  };
  title: string;
}

interface CategoryCardProps extends CardProps {}

interface BlogCardProps extends CardProps {
  publishDate: string;
  content: string;
  horizontal?: boolean;
  highlight?: boolean;
}

interface HorizontalBlogCardProps extends BlogCardProps {}

interface CardsViewProps {
  data: BlogCardProps[];
  viewTitle?: string;
}
