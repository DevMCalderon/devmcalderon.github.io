const AllProjectsTable = () => {

  return(
    <>
  
      
    {/* project items list */}
    {projects && (
      <>
        <h3 className="text-[1.78rem] text-white mb-2">Projects list:</h3>
        <hr className="mb-6 w-1/3 mx-auto" />
        {/* listado de proyectos */}
        <ProjectsListGrid
          projects={projects}
          category={title}
          maxProjectsToShow={999}
        />
      </>
    )}
    </>
  );
}

export default AllProjectsTable;