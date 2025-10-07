import projectImg from "../../public/vite.svg"

export default function Projects() {
  return (
    <div className="mx-2">
      <h2 className="text-xl">Projects</h2>
      <div className="flex flex-col gap-[2rem]">
        <div>
          <h3 className="text-lg my-2">Scribbly</h3>
          <img
          src={projectImg}
          width={100}
          height={100}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut minus mollitia temporibus, sequi necessitatibus magni perspiciatis dolorum consequatur error delectus rerum ab numquam itaque maxime iusto voluptates assumenda atque.
          </p>
        </div>
        <div>
          <h3 className="text-lg my-2">Remindr</h3>
          <img
          src={projectImg}
          width={100}
          height={100}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deleniti accusamus illo veniam culpa et nobis cum illum earum! In quo laboriosam dolores. Omnis fugit, labore obcaecati a odio magnam?
          </p>
        </div>
        <div>
          <h3 className="text-lg my-2">File Uploader</h3>
          <img
          src={projectImg}
          width={100}
          height={100}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias amet ducimus sint omnis adipisci placeat, dolor consequuntur perferendis, ea cum possimus laboriosam cumque excepturi! Maiores laborum omnis ea error.
          </p>
        </div>
      </div>
    </div>
  )
}