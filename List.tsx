// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react';

type Post = {
  id: number,
  content: string
};
interface Props {}
interface State {
  count: number,
  list: Post[],
}
export class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      count: 0,
      list: [{ id: 0, content: 'test' }],
    };
    this.add = this.add.bind(this);
  }
  add() {
    const count = this.state.count + 1;
    const list = this.state.list;
    this.setState({ 
      count: count,
      list: this.state.list.concat({
        id: count,
        content: 'test'
      })
    });
  }
  render() {
    const list = this.state.list.map((post: Post) =>
      <li key={post.id}>{post.content}</li>
    );
    return (
      <div className="List">
        <div className="wrapper">
          <button onClick={this.add}>+</button>
        </div>
        <div className="post-wrapper">{list}</div>
      </div>
    );
  }
}
