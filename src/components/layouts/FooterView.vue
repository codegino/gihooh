<template>
  <div class="footer">
    <nav class="links">
      <a href="https://twitter.com/carlogihooh" class="link" target="_blank">
        <TwitterIcon/>
      </a>
      <a href="https://facebook.com/gihooh" class="link"  target="_blank">
        <FacebookIcon/>
      </a>
      <a href="https://instagram.com/carlogihooh" class="link" target="_blank">
        <InstagramIcon/>
      </a>
      <a href="https://github.com/gihooh" class="link" target="_blank">
        <GithubIcon/>
      </a>
      <a href="https://www.linkedin.com/in/gihooh" class="link" target="_blank">
        <LinkedinIcon/>
      </a>
    </nav>
  </div>
</template>

<script>
import TwitterIcon from '@/assets/icons/twitter.svg'
import FacebookIcon from '@/assets/icons/facebook2.svg'
import GithubIcon from '@/assets/icons/github.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'

export default {
  name: 'menu',
  components: {
    TwitterIcon,
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon
  }
}
</script>

<style scoped lang="scss">
  .footer {
    background-color: var(--color-primary);
  }

  .links {
    display: flex;
    justify-content: flex-end;
  }

  .link {
    padding: 1rem 1.5rem;
  }
</style>
