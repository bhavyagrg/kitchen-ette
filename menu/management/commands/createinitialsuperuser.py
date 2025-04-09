from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = "Create a superuser if none exists"

    def handle(self, *args, **kwargs):
        User = get_user_model()
        if not User.objects.filter(username="bhavyagrg").exists():
            User.objects.create_superuser(
                username="bhavyagrg",
                email="bebhavyagarg@example.com",
                password="123"
            )
            self.stdout.write(self.style.SUCCESS("Superuser created"))
        else:
            self.stdout.write("Superuser already exists. Password reset.")
