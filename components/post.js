import { gql } from "@apollo/client";
import { client } from 'client';

export default function Post(title) {
    return (
        {title && <h1 className={style.title}>{title}</h1>}
      );
}