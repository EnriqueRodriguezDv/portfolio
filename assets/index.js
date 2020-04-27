import Nav from './plugin/Nav.js'

const headNav = {
    headNavProject: new Nav("navProjects", 1),
    headNavEducation: new Nav("navEducation", 2),
    headNavContact: new Nav("navContact", 3),
}

const globalNav = {
    globalNavHeader: new Nav("globalNavHeader", 0),
    globalNavProject: new Nav("globalNavProject", 1),
    globalNavEducation: new Nav("globalNavEducation", 2),
    globalNavContact: new Nav("globalNavContact", 3)
}
