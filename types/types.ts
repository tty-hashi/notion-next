import { ParsedUrlQuery } from "querystring";

export type LayoutProps = {
  children: React.ReactNode;
};

export type PageProps = {
  slug: string;
  name: string;
  author: string;
  cover: string;
  published: string;
  tags: string[];
  content: string;
};

export type CardProps = {
  page: PageType;
};

export type ArticleProps = {
  page: PageType;
  blocks?: BlockType[];
};

export type ArticleMetaProps = CardProps;

export type IndexProps = { pages: PageType[] };

export type Params = ParsedUrlQuery & {
  slug: string;
};

export type FileType = {
  file?: { url: string };
  external?: { url: string };
};

// export type FileType2 = Record<"file" | "external", { url: string }>;
export type AnnotationType = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

export type RichTextType = {
  plain_text: string;
  href: string | null;
  annotations: AnnotationType;
};

export type PropertyType = {
  name: { title: RichTextType[] };
  author: { rich_text: RichTextType[] };
  slug: { rich_text: RichTextType[] };
  published: { date: { start: string } };
  isPublic: { checkbox: boolean };
  tags: { multi_select: [{ name: string }] };
};

export type PageType = {
  id: string;
  cover: FileType | null;
  // properties: Record<string, any>;
  properties: PropertyType;
};

export type BlockType = {
  type: string;
  heading_1: { rich_text: RichTextType[] };
  heading_2: { rich_text: RichTextType[] };
  paragraph: { rich_text: RichTextType[] };
};

[
  {
    object: "page",
    id: "6e0deebc-dcc8-4de3-b925-9261c1e69038",
    created_time: "2022-12-09T06:41:00.000Z",
    last_edited_time: "2022-12-09T07:09:00.000Z",
    created_by: {
      object: "user",
      id: "be11ef0d-7bd7-4931-a0d6-b7f1c6a0cba2",
    },
    last_edited_by: {
      object: "user",
      id: "be11ef0d-7bd7-4931-a0d6-b7f1c6a0cba2",
    },
    cover: null,
    icon: null,
    parent: {
      type: "database_id",
      database_id: "ae1d8cc2-eeb8-4c36-ab72-8e955576ed7e",
    },
    archived: false,
    properties: {
      author: {
        id: "%3CNmp",
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            text: {
              content: "Hashi",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "Hashi",
            href: null,
          },
        ],
      },
      tags: {
        id: "JV%3BO",
        type: "multi_select",
        multi_select: [
          {
            id: "e8b055ae-13af-45f4-90bd-aa0347d133d0",
            name: "america",
            color: "red",
          },
        ],
      },
      published: {
        id: "PTw%3C",
        type: "date",
        date: {
          start: "2022-12-09",
          end: null,
          time_zone: null,
        },
      },
      isPublic: {
        id: "dKpN",
        type: "checkbox",
        checkbox: true,
      },
      created: {
        id: "pywY",
        type: "created_time",
        created_time: "2022-12-09T06:41:00.000Z",
      },
      slug: {
        id: "vr%3Bd",
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            text: {
              content: "america",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "america",
            href: null,
          },
        ],
      },
      name: {
        id: "title",
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: "America",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "America",
            href: null,
          },
        ],
      },
    },
    url: "https://www.notion.so/America-6e0deebcdcc84de3b9259261c1e69038",
  },
];
