import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsArticle extends Struct.ComponentSchema {
  collectionName: 'components_elements_articles';
  info: {
    displayName: 'Article';
    icon: 'feather';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    link: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsBox extends Struct.ComponentSchema {
  collectionName: 'components_elements_boxes';
  info: {
    displayName: 'Box';
    icon: 'stack';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsContainer extends Struct.ComponentSchema {
  collectionName: 'components_elements_containers';
  info: {
    displayName: 'Section';
    icon: 'layout';
  };
  attributes: {
    articles: Schema.Attribute.Component<'elements.article', true>;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    content: Schema.Attribute.Blocks;
    grid: Schema.Attribute.Component<'elements.grid', false>;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsEmbed extends Struct.ComponentSchema {
  collectionName: 'components_elements_embeds';
  info: {
    displayName: 'Embed';
    icon: 'code';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsGrid extends Struct.ComponentSchema {
  collectionName: 'components_elements_grids';
  info: {
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    boxes: Schema.Attribute.Component<'elements.box', true>;
    media: Schema.Attribute.Component<'elements.media', true>;
  };
}

export interface ElementsHero extends Struct.ComponentSchema {
  collectionName: 'components_elements_heroes';
  info: {
    displayName: 'Hero';
    icon: 'star';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    googleMaps: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    soundcloud: Schema.Attribute.String;
    tiktok: Schema.Attribute.String;
    website: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface ElementsMedia extends Struct.ComponentSchema {
  collectionName: 'components_elements_media';
  info: {
    displayName: 'Media';
    icon: 'picture';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementsQuote extends Struct.ComponentSchema {
  collectionName: 'components_elements_quotes';
  info: {
    displayName: 'Quote';
    icon: 'message';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.article': ElementsArticle;
      'elements.box': ElementsBox;
      'elements.button': ElementsButton;
      'elements.container': ElementsContainer;
      'elements.embed': ElementsEmbed;
      'elements.grid': ElementsGrid;
      'elements.hero': ElementsHero;
      'elements.links': ElementsLinks;
      'elements.media': ElementsMedia;
      'elements.quote': ElementsQuote;
    }
  }
}
