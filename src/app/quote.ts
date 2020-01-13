export class Quote {
  showSubmittedBy: boolean;
  showSubmittedOn: boolean;
  constructor(public id: number, public text: string, public author: string, public submittedBy: string, public submittedOn: Date, public upvotes: number, public downvotes: number, public topvotes: number) {
    this.showSubmittedBy=false;
    this.showSubmittedOn=false;
  }
}
