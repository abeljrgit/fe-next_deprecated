type DefaultMetaTypes = {
  title: string;
  site_name: string;
  description: string;
  url: string;
  image: string;
  type: string;
  robots: string;
};

export type SeoPropsTypes = {
  date?: string;
  templateTitle?: string;
} & Partial<DefaultMetaTypes>;
