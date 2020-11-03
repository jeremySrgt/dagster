import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {PipelineExplorerRegexRoot} from 'src/PipelineExplorerRoot';
import {PipelineRunsRoot} from 'src/PipelineRunsRoot';
import {PipelineExecutionRoot} from 'src/execute/PipelineExecutionRoot';
import {PipelineExecutionSetupRoot} from 'src/execute/PipelineExecutionSetupRoot';
import {PipelineNav} from 'src/nav/PipelineNav';
import {PipelinePartitionsRoot} from 'src/partitions/PipelinePartitionsRoot';
import {PipelineOverviewRoot} from 'src/pipelines/PipelineOverviewRoot';

export const PipelineRoot: React.FunctionComponent<{}> = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <PipelineNav />
      <Switch>
        <Route path="/pipeline/:pipelinePath/overview" component={PipelineOverviewRoot} />
        <Route
          path="/pipeline/:pipelinePath/playground/setup"
          component={PipelineExecutionSetupRoot}
        />
        <Route path="/pipeline/:pipelinePath/playground" component={PipelineExecutionRoot} />
        <Route
          path="/pipeline/:pipelinePath/runs/:runId"
          render={({match}) => <Redirect to={`/instance/runs/${match.params.runId}`} />}
        />
        <Route path="/pipeline/:pipelinePath/runs" component={PipelineRunsRoot} />
        <Route path="/pipeline/:pipelinePath/partitions" component={PipelinePartitionsRoot} />
        {/* Capture solid subpath in a regex match */}
        <Route path="/pipeline/(/?.*)" component={PipelineExplorerRegexRoot} />
      </Switch>
    </div>
  );
};
