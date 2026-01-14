export default function FeaturesSection() {
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-[36px] text-text-primary text-center mb-5">
          How <span className="font-bold">it Works</span>
        </h2>
        <p className="max-w-150 mx-auto text-sm text-center capitalize text-text-secondary mb-7.5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et{" "}
        </p>
        <div className="flex items-center justify-center gap-10">
          {/* tab list design */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-4 h-4 rounded-full bg-white ring-8 ring-primary"></div>
            <p className="text-sm font-medium text-primary">Task Management</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-4 h-4 rounded-full bg-white ring-8 ring-gray"></div>
            <p className="text-sm font-medium text-text-primary">
              Built In Chat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
