import { createElement } from 'react';

interface Props {
  htmlString: string;
}

/** HTML 파서 컴포넌트 */
export default function HtmlParser({ htmlString }: Props) {
  const parseHtml = (html: string): React.ReactNode => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    /** HTML 문자열을 React element로 변환한다. */
    const traverse = (node: Node): React.ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent;

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const children = Array.from(element.childNodes).map(traverse);

        // React element 생성
        return createElement(
          element.tagName.toLowerCase(),
          {
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

    return Array.from(doc.body.childNodes).map(traverse);
  };

  return <>{parseHtml(htmlString)}</>;
}
