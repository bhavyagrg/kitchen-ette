from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Creates an initial superuser'

    def handle(self, *args, **options):
        User = get_user_model()
        username = 'bhavyagrg'
        email = 'bebhavyagarg@example.com'
        password = '123'

        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username=username, email=email, password=password)
            self.stdout.write(self.style.SUCCESS(f"Superuser '{username}' created."))
        else:
            user = User.objects.get(username=username)
            user.set_password(password)
            user.is_superuser = True
            user.is_staff = True
            user.save()
            self.stdout.write(self.style.WARNING(f"Superuser '{username}' already exists. Password reset."))
