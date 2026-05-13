import Skeleton
  from "./Skeleton";

export default function NewsSkeleton() {

  return (

    <div
      className="
        bg-white
        dark:bg-gray-800
        rounded-2xl
        shadow-lg
        overflow-hidden
      "
    >

      <Skeleton
        className="
          h-56
          w-full
        "
      />

      <div
        className="
          p-5
          space-y-4
        "
      >

        <Skeleton
          className="
            h-6
            w-3/4
          "
        />

        <Skeleton
          className="
            h-4
            w-full
          "
        />

        <Skeleton
          className="
            h-4
            w-5/6
          "
        />

        <Skeleton
          className="
            h-10
            w-28
          "
        />

      </div>

    </div>

  );

}