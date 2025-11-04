export interface SlideData {
  slide: number;
  focusTitle: string;
  subTitle: string;
  keyContent: string[];
  metrics: string[];
  targetContact: string;
  visual?: 'pain' | 'funnel' | 'guarantee' | 'win-win' | 'pilot' | 'cta';
}
