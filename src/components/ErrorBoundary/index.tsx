import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

interface State {
  error: Error | null;
  hasError: boolean;
}

interface Props extends PropsWithChildren {
  fallback: ReactNode;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);

    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, info);
    this.setState({ error });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
