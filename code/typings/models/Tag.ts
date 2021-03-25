import { BaseItem } from "./_Base"

export type TagType = 'original' | 'reprint' | 'other'
export interface TagItem extends BaseItem {
  name: string
}

export type TagList = TagItem[]
