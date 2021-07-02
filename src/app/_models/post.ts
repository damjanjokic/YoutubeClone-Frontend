import { Profile } from './profile';

export interface Post {
    id: number;
    title: string;
    likesCount: number,
    dislikesCount: number,
    videoFileName: string,
    author: Profile,
    comments: Comment[],
    created: Date
  }
