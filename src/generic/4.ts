interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад 
const pageProps: ComponentProps = { title: 'The Awesome Page' };
const page = new Page(pageProps);
page.pageInfo();

export {};
