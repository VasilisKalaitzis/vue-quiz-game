<template>
  <div class="dump-text-container">
    <textarea class="dump-text-container" id="textToCopy">
1) Please describe your involvement in the development lifecycle (i.e. end to end involvement such as collecting requirement, design, implementation) within your most current role?

My current role is the role of a Software engineer at SG Digital / Openbet Ltd
My duties that directly involves the SCRUM team:
-  I take part to the scrum/spring planning. That includes breaking the epics/features into stories/tasks, defining the team’s capacity and workload but also helping with the assignment in order each of them to reach the ideal individual or someone who needs to receive training
- I take part into the refinement which includes high level analysis as well as estimating the  implementation time
- Last but not least I take part to the scrum retrospective in order to define what went well and what went wrong during the lifecycle.

My daily duties as an individual:
- I take part on the analysis of a task
-I take part on the implementation of a task (which includes writing code for both front-end and back-end)
-I take part on code reviews
-I write the release notes of my tickets
Other duties that I take on from time to time:
-Writing bash scripts
-Proposing alternative UI/UX solutions whenever I feel confident that the solutions given are not strong enough
-helping with the release process



2) Please describe your experience designing or architecting a system or components of a system. Please also include information about the system and/or component(s) (i.e. external- or internal-facing, etc.).

(I hope my answer is not completely off topic. Excuse me in case it is)

The system I want to describe is called TechInsights. It’s a web platform created while I was working with TTS wireless. The initial team was composed only by two junior software engineers. The reason I choose to describe this project is because it was the first application I created during my professional career and from the mistakes that I did I learned valuable lessons.

TechInsights is a platform that defines the operation of any workflow with the use of dynamic forms. The application helps the team to follow agile practices, organizes the tasks, provides a fast and easy communication between internal and external members and also provides special tools for the users (maps, reports e.t.c). You can think of it as a Jira alternative, focused more on the needs of a simple everyday user.
Initially I focused on the creation of the whole mobile version of the platform. I chose the technologies that it was going to use (Cordova, JQuery, KendoUI, CSS3). I assumed the role of UI/UX designer as well as the developer who analyse and implements until it hit the production.

Meanwhile, as the workload on the web platform increased, I took part on the implementation of its front-end as well as its back end. Along with the other developer we came up with a plan for code and output consistency. Working with PHP/Laravel and JQuery, the features I implemented there were APIs, administration tools, other special tools (leaflet maps, reports, schedulers) and other parts of the functionality (external integration from sources like GitHub, automated system for sending emails, real time notifications with Socket.io)

</textarea>
  </div>
</template>

<script>
export default {
  name: "Dump element"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.dump-text-container {
  height: 1px;
  width: 1px;
}
</style>
