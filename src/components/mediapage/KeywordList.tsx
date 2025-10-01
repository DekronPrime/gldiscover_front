import { Keyword } from "@/src/types/type";
import { FC } from "react";
import Chip from "../common/Chip";

interface KeywordListProps {
  keywords: Keyword[];
}

const KeywordList: FC<KeywordListProps> = ({ keywords }: KeywordListProps) => {
  return (
    <div className="flex justify-start gap-4 flex-wrap">
      {keywords.map((keyword) => (
        <Chip key={keyword.id} path="#" variant="keyword">
          {keyword.name}
        </Chip>
      ))}
    </div>
  );
};

export default KeywordList;
