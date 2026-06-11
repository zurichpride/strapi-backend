import type { Schema, Struct } from '@strapi/strapi';

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
    displayName: 'Container';
    icon: 'dashboard';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.button', true>;
    content: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.container': ElementsContainer;
    }
  }
}
