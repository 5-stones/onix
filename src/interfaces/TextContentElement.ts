import { ContentAudience } from '../enums';
import { TextType } from '../enums';
import { Text } from './Text';

export interface TextContentElement {
  TextType?: TextType;
  ContentAudience?: ContentAudience;
  Text?: Text;
}

