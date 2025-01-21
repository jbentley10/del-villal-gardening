import { Document, Block } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';

interface EmbeddedAssetBlock extends Block {
  data: {
    target: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
      };
    };
  };
}

export const renderDocument = (document: Document) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: EmbeddedAssetBlock) => {
        const { url } = node.data.target.fields.file;
        const { title } = node.data.target.fields;
        const { width, height } = node.data.target.fields.file.details.image;
        
        return (
          <Image
            src={`https:${url}`}
            alt={title}
            width={width}
            height={height}
            className="my-4"
          />
        );
      },
      [BLOCKS.PARAGRAPH]: (_node: Block, children: React.ReactNode) => (
        <p className="mb-4">
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (_node: Block, children: React.ReactNode) => (
        <ul className="pl-8 list-disc mb-4">
          {children}
        </ul>
      ),
    },
    renderText: (text: string) => {
      return text.split('\n').reduce<React.ReactNode[]>((children, textSegment, index) => {
        if (index > 0) {
          children.push(<br key={`br-${index}`} />);
        }
        children.push(textSegment);
        return children;
      }, []);
    },
  };

  if (!document) {
    return null;
  }

  return documentToReactComponents(document as Document, options as Options);
};