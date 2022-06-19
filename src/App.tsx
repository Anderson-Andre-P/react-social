import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

// interface Posts {
//   id: number;
//   author: {
//     avatarUrl: string;
//     name: string;
//     role: string;
//   };

//   content: {
//     type: "paragraph" | "link";
//     content: string;
//   }[];
//   publishedAt: Date;
// }

interface Post extends PostProps {
  id: number;
}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Anderson-Andre-P.png",
      name: "Anderson André",
      role: "Estagiário @Foursys",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-06-13 08:13:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Anderson-Andre-P.png",
      name: "Ricardo Vilela",
      role: "Psicologo @Ciclos",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-06-23 10:10:49"),
  },
];

export function App({ content }: PostProps) {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
