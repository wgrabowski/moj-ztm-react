import { WidgetType } from '../enums';

export interface WidgetConfig {
  label: string;
  type: WidgetType;
  data: unknown;
}
