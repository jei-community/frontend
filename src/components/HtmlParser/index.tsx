import { createElement } from 'react';

interface Props {
  /** html 스트링 */ htmlString: string;
}

/** HTML 파서 컴포넌트 */
export default function HtmlParser({ htmlString }: Props) {
  const parseHtml = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    /** HTML 문자열을 React element로 변환한다. */
    const traverse = (node: Node, index: number): React.ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent;

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const children = Array.from(element.childNodes).map((childNode, childIndex) => traverse(childNode, childIndex));

        // React element 생성
        return createElement(
          element.tagName.toLowerCase(),
          {
            key: index,
            style: element.style.cssText
              ? Object.fromEntries(
                  element.style.cssText.split(';').map((style) => {
                    const [key, value] = style.split(':');

                    return [key.trim(), value?.trim()];
                  }),
                )
              : undefined,
          },
          children,
        );
      }

      return null;
    };

    return Array.from(doc.body.childNodes).map((node, index) => traverse(node, index));
  };

  return <>{parseHtml(htmlString)}</>;
}
