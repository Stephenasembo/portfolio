export default function Services() {
  return (
    <div className="mx-2">
      <h2 className="text-xl my-4">Services</h2>
      <p>Below are some of the services I can offer</p>
      <div className="flex flex-col gap-[1rem]">
        <div>
          <h3 className="text-lg my-2">Front end web development</h3>
          <p>
            I build responsive, accessible and visually appealing interfaces that bring ideas to life across all screen sizes.
          </p>
        </div>
        <div>
          <h3 className="text-lg my-2">Back end web development</h3>
          <p>
            I develop robust and scalable server-side logic and APIs with efficient database integration and secure authentication systems.
          </p>
        </div>
        <div>
          <h3 className="text-lg my-2">Task automation</h3>
          <p>
            I automate repetitive workflows with custom scripts to save time, reduce errors and boost productivity.
          </p>
        </div>
        <div>
          <h3 className="text-lg my-2">Automated bots</h3>
          <p>
            I design smart bots that automate tasks, interact with users and connect with different services.
          </p>
        </div>
      </div>
    </div>
  )
}