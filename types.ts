
export interface ProductInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: 'Alpha' | 'Beta' | 'Prod';
}

export interface TerminalLine {
  text: string;
  type: 'command' | 'response' | 'error' | 'system';
  timestamp: string;
}
