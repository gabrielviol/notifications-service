export interface NotifictionProps {
  content: string;
  category: string;
}

export class Notification {
  private props: NotifictionProps;

  constructor() {
    this.content = '';
  }

  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }

    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
}

const notifiction = new Notification();

notifiction.content = 'asdasdasdsad';
