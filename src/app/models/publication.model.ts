import { User } from './user.model';

export interface Publication {
  uid?: string;
  author: User;
  comments: any[];
  key_words: any[];
  text: string;
  title: string;
}
