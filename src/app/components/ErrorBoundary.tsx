import { Component, ErrorInfo, ReactNode } from 'react';
import { NotFound } from './NotFound';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Runtime error captured by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    try {
      window.location.href = window.location.origin + '/SomilPortfolio/';
    } catch {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return <NotFound onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}
