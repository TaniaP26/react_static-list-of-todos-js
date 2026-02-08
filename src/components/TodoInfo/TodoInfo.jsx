import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo, user }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
