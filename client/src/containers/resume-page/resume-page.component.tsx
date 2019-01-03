import * as React from "react"
import JobCard from "src/components/job-card"
import EducationCard from "src/components/education-card"

class ResumePage extends React.Component {
  render() {
    const bbStrings = [
      "Serve as a remote member of the company's development team working in all stages of web development.",
      "Collaborate with the development team to design overall architecture and create new features for full stack web applications.",
      "Construct front end components using HTML, Typescript, React, and CSS.",
      "Develop relational databases and back end features using Prisma and GraphQL.",
      "Utilize API calls and third party authentication services to manage site security.",
      "Accomplishments include creating a web based system that allows the client to assign and manage staff tasks, assess the performance of employees, view the company’s sales statistics, evaluate profitability, and manage business goals."
    ]

    const ldbStrings = [
      "Played an active role in executing both simple and more complex aspects of construction projects.",
      "Precisely calculated and cut various building materials, and then organized and staged those materials to facilitate installation.",
      "Managed milestones to meet project deadlines and see tasks to completion."
    ]

    const merStrings = [
      "Provided excellent customer service by catering to guest needs, bussing tables and valeting cars."
    ]
    const wccStrings = ["Ensured a positive experience for golf members."]
    const duStrings = [
      "Relevant Coursework: Systems programming, web development, discrete math, data structures, algorithms, database management, Computer Aided Drafting and Design.",
      "School activities: Men’s Club Lacrosse – Treasurer, Alpine Club"
    ]
    const ixString = [
      "Immersed in an 8-week living and learning community in an up-and-coming technology hub.",
      "Acquired a deep understanding of web development, from user interface to the database.",
      "Worked with the backend database and used API calls, used HTML, Javascript and CSS",
      "Collaborated on projects using GitHub",
      "Developed a mobile bulletin board application for admins to restrict user permissions, manage postings, and prioritize content."
    ]

    return (
      <div>
        <h2>Resume</h2>
        <hr />
        <h3>Education</h3>
        <EducationCard
          title="University of Denver | Denver, CO"
          major="Major: Computer Science B.S., Minors: Math and Spanish"
          date="(July, 2018 - present)"
          gpa="(GPA: 3.91)"
          strings={duStrings}
        />
        <EducationCard
          title="iXperience | Lisbon, Portugal"
          date="(Summer 2018)"
          major="Full Stack Coding Course + Internship"
          gpa=" "
          strings={ixString}
        />
        <hr />
        <h3>Work Experience</h3>
        <JobCard
          company="Bureau Billy"
          position="Full Stack Developer"
          dates="(2018-present)"
          data={bbStrings}
        />
        <JobCard
          company="Lane Design/Build, Inc."
          position="Carpenter"
          dates="(2015-2018)"
          data={ldbStrings}
        />
        <JobCard
          company="Meredith’s Catering and Events"
          position="Event Staff"
          dates="(2014-2015)"
          data={merStrings}
        />
        <JobCard
          company="Waynesborough Country Club"
          position="Caddy"
          dates="(2013-2014)"
          data={wccStrings}
        />
      </div>
    )
  }
}

export default ResumePage
